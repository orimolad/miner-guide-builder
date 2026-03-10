

## Lock App to Portrait Mode & Prevent Zoom on Rotation

The zoom issue on landscape rotation is caused by the browser auto-adjusting the viewport scale. Two fixes needed:

### Changes

1. **`index.html`** — Update the viewport meta tag to prevent zoom:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
   ```

2. **`src/index.css`** — Add CSS to force portrait-only display with a landscape overlay message:
   ```css
   @media (orientation: landscape) and (max-height: 500px) {
     body::after {
       content: 'Please rotate your device to portrait mode';
       /* full-screen overlay styling */
     }
   }
   ```

3. **Native orientation lock** — The iOS `Info.plist` already allows landscape. Remove landscape orientations:
   - **`ios/App/App/Info.plist`** — Remove `UIInterfaceOrientationLandscapeLeft` and `UIInterfaceOrientationLandscapeRight` from `UISupportedInterfaceOrientations`
   - **`android/app/src/main/AndroidManifest.xml`** — Add `android:screenOrientation="portrait"` to the `<activity>` tag

This locks the native apps to portrait and prevents the zoom bug in the web version.

