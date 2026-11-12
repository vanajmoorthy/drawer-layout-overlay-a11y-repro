# react-native-drawer-layout: closed drawer overlay exposed to screen readers

Run: `npm install` then `npx expo run:android` (or `npx expo run:ios`).

Steps: launch; leave the drawer closed; turn on TalkBack / VoiceOver (or run `adb shell uiautomator dump /sdcard/ui.xml && adb shell cat /sdcard/ui.xml | grep "Close drawer"`).

Expected: no "Close drawer" element while the drawer is closed.
Actual: a full-screen "Close drawer" button is focusable.

Scaffolded with Claude Code (AI-assisted).
