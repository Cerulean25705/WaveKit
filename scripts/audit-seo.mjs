import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skipDirectories = new Set([".git", "node_modules", "thanks", "outputs"]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && skipDirectories.has(entry.name)) return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function publicUrl(file) {
  const directory = path.relative(root, path.dirname(file));
  return directory ? `https://wavekit.net/${directory}/` : "https://wavekit.net/";
}

function localTargetExists(file, reference) {
  if (!reference || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(reference) || reference.startsWith("#")) {
    return true;
  }
  const cleanReference = decodeURIComponent(reference.split(/[?#]/)[0]);
  const target = cleanReference.startsWith("/")
    ? path.join(root, cleanReference)
    : path.resolve(path.dirname(file), cleanReference);
  if (fs.existsSync(target)) return true;
  return fs.existsSync(path.join(target, "index.html"));
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = new Set(
  [...sitemap.matchAll(/<loc>(https:\/\/wavekit\.net\/[^<]*)<\/loc>/g)].map((match) => match[1])
);
const pages = walk(root).filter((file) => file.endsWith("index.html"));
const results = pages.map((file) => {
  const html = fs.readFileSync(file, "utf8");
  const read = (pattern) => html.match(pattern)?.[1] || "";
  const title = read(/<title>([^<]*)<\/title>/i);
  const description = read(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = read(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const expectedUrl = publicUrl(file);
  const structuredData = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const malformedStructuredData = structuredData.filter((block) => {
    try {
      JSON.parse(block[1]);
      return false;
    } catch {
      return true;
    }
  }).length;
  const problems = [];

  if (!title) problems.push("missing title");
  if (!description) problems.push("missing meta description");
  if (canonical !== expectedUrl) problems.push(`canonical should be ${expectedUrl}`);
  if ([...html.matchAll(/<h1\b/gi)].length !== 1) problems.push("page must have exactly one H1");
  if (!structuredData.length) problems.push("missing structured data");
  if (malformedStructuredData) problems.push("malformed structured data");
  if (!sitemapUrls.has(expectedUrl)) problems.push("missing from sitemap");
  const brokenLinks = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)]
    .map((match) => match[1])
    .filter((reference) => !localTargetExists(file, reference));
  if (brokenLinks.length) problems.push(`broken local links: ${[...new Set(brokenLinks)].join(" | ")}`);

  return { file: path.relative(root, file), title, description, problems };
});

for (const field of ["title", "description"]) {
  const groups = new Map();
  for (const result of results) {
    const matches = groups.get(result[field]) || [];
    matches.push(result);
    groups.set(result[field], matches);
  }
  for (const [value, matches] of groups) {
    if (value && matches.length > 1) {
      for (const result of matches) result.problems.push(`duplicate ${field}`);
    }
  }
}

const failures = results.filter((result) => result.problems.length);
if (failures.length) {
  for (const failure of failures) {
    console.error(`${failure.file}: ${failure.problems.join(", ")}`);
  }
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed: ${results.length} public pages with unique metadata, valid canonicals, structured data, H1s, local links, and sitemap coverage.`);
}
