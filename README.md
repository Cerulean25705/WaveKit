# WaveKit

WaveKit is a fan-made Wuthering Waves team helper. It lets players mark the Resonators and weapons they own, then suggests practical teams, build notes, replacement context, and feedback/reporting paths.

## Project Status

WaveKit is currently an early public prototype. Team suggestions and build notes are conservative and should be reviewed as Wuthering Waves changes.

## Local Use

This is a static site. Open `index.html` directly, or serve the folder with any static web server.

## Deploying to Netlify

Use these Netlify settings:

- Build command: leave blank
- Publish directory: repository root
- Deploy branch: `main`

The feedback form uses Netlify Forms. Local preview submissions are redirected to the thank-you page without sending a real report.

## Optional Firebase Profile Sync

WaveKit works without an account. Firebase is only used if you want optional cross-device profile sync.

To enable it:

- Create a Firebase project.
- Add a Web app in Firebase project settings.
- Enable Authentication providers, such as Email/Password and Google.
- Create a Firestore database.
- Paste your Firebase Web app config into `assets/firebase-config.js`.
- Change `firebaseEnabled` in `assets/firebase-config.js` to `true`.
- Add the rules from `firestore.rules` to Firestore Rules.

The Firestore profile document is stored at:

`users/{firebaseUserId}/profiles/wavekit`

Only the signed-in user should be able to read or write their own profile document.

## Fan Project Notice

WaveKit is an unofficial fan-made tool. Wuthering Waves, its characters, names, art, icons, and related assets belong to Kuro Games. WaveKit is not affiliated with, endorsed by, or sponsored by Kuro Games.

## License

Project code is available under the MIT License. Game assets and Wuthering Waves intellectual property are not covered by this license.
