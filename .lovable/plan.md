

## Allow Landscape Mode Without Zoom Bug

The previous fix was too aggressive — it blocked landscape entirely. The real issue is the viewport zooming on rotation. The fix is simpler:

### Changes

1. **`index.html`** — The viewport meta tag already has `maximum-scale=1.0, user-scalable=no` which prevents the zoom. Keep as-is.

2. **`src/index.css`** — Remove the landscape orientation overlay that blocks the UI:
   - Delete the `@media (orientation: landscape) and (max-height: 500px)` block that shows "Please rotate your device to portrait mode"

3. **`ios/App/App/Info.plist`** — Re-add landscape orientations:
   - Add `UIInterfaceOrientationLandscapeLeft` and `UIInterfaceOrientationLandscapeRight` back to `UISupportedInterfaceOrientations`

4. **`android/app/src/main/AndroidManifest.xml`** — Remove `android:screenOrientation="portrait"` from the activity to allow rotation again.

The `maximum-scale=1.0` viewport setting alone prevents the zoom-on-rotate bug while still allowing landscape use.

