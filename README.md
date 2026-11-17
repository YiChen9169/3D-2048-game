# 3D 2048

**English** | [繁體中文](README.zh-TW.md)

A 3D take on 2048, played inside a 4×4×4 cube. Rotate the cube with your mouse or finger, then drag along one of its edges to slide every tile in that direction at once. Matching tiles merge.

Runs in any modern browser, and is also packaged as an Android app.

## Features

- **4×4×4 cube** with colored, semi-transparent tiles. You can see numbers on tiles behind other tiles.
- **Edge-snapping drag:** the game checks which set of cube edges your drag is closest to. If the angle between your drag and that edge is more than 22°, the move is rejected.
- **Live drag feedback:** the matching cube edges light up green (valid) or red (invalid), and a dashed arrow shows the direction the game detected.
- **UNDO:** 3 uses per game. **RESET** starts a new game and restores your UNDO uses.
- **CONGRATULATIONS!** pops up whenever you merge a number larger than any you have merged since the last RESET.
- Best score is saved on your device.

## How to play

| Action | Mouse (computer) | Touch (phone) |
|---|---|---|
| Slide & merge | Press on the cube and drag along an edge | One finger on the cube, drag along an edge |
| Rotate the cube | Drag on empty space, or right-drag anywhere | One finger on empty space, or two fingers |
| Zoom | Mouse wheel | Pinch with two fingers |
| Undo | UNDO button or Ctrl+Z | UNDO button |
| Rotate only | — | Turn on the **ROTATE** button so one-finger drags always rotate |

Tip: the cube's three sets of edges should all be clearly visible on screen. An edge that points almost straight at you can't be used for a move, so rotate the cube a little first.

## Play in a browser

Download or clone this repository and open `index.html` in Chrome, Edge, Firefox or Safari. An internet connection is needed the first time, because three.js is loaded from a CDN.

## Install on an Android phone

1. Open this repository's **[Releases](../../releases)** page and download the latest `3D-2048.apk` to your phone.
2. Tap the downloaded file to install it.

> [!IMPORTANT]
> **Before you install, read these notes:**
> - **Allow unknown apps.** Android blocks apps that don't come from Google Play by default. When it asks, tap **Settings**, turn on **Allow from this source** for your browser or file manager, then go back and tap **Install**.
> - **Google Play Protect may warn you** that the app is unrecognized. Tap **More details → Install anyway**. The warning appears because the app isn't published on Google Play.
> - **Requires Android 6.0 or later.**
> - **This is a debug build.** It is signed with a development key. If you later install a version signed with a different key, uninstall the old version first. Uninstalling also deletes your best score.
> - **Only download the APK from this repository's Releases page.** APKs from other sources may have been modified.
> - **iPhone / iPad:** APK files can't be installed on iOS. Play the browser version in Safari instead.

The app works fully offline.

## Build from source

You need:

- [Node.js](https://nodejs.org/) 20 or later
- [Android Studio](https://developer.android.com/studio), with its setup wizard completed so the Android SDK is installed
- **JDK 21.** Gradle 8.11 can't run on newer Java versions such as the Java 25 bundled with recent Android Studio releases. If the build fails with `Unsupported class file major version`, install JDK 21 (for example [Eclipse Temurin](https://adoptium.net/)) and add this line to `~/.gradle/gradle.properties`:
  ```properties
  org.gradle.java.home=C:\\Program Files\\Eclipse Adoptium\\jdk-21.x.x-hotspot
  ```

Then run:

```bash
npm install
npm run apk
```

The APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

Other scripts:

| Command | What it does |
|---|---|
| `npm run build:web` | Generates `www/` from `index.html`, with three.js bundled locally |
| `npm run sync` | Builds `www/` and copies it into the Android project |
| `npm run open` | Opens the Android project in Android Studio |
| `npm run apk` | Builds `www/`, syncs it and builds a debug APK |

## Project structure

```
index.html              The whole game (browser version, three.js from CDN)
scripts/build-www.mjs   Generates www/ for the app (three.js bundled, works offline)
capacitor.config.json   App name and ID
android/                Native Android project (Capacitor)
```

Edit only `index.html`. `www/` is generated from it and is not committed.

Tunable settings (grid size, angle tolerance, UNDO limit and others) are at the top of the script in `index.html`.

## License

Copyright (c) 2026 YI-CHEN, YOU

Released under the [MIT License](LICENSE). A [Chinese reference translation](LICENSE.zh-TW.md) is also provided; the English text governs.

This project uses three.js and Capacitor, both under the MIT License. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

"2048" refers to the general sliding-tile number puzzle genre. This project is an independent 3D game and is not affiliated with or endorsed by the creators of any other 2048 game.
