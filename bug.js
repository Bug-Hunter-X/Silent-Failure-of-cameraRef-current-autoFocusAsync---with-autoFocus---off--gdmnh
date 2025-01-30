This bug occurs when using the Expo Camera API with custom camera configurations.  Specifically, when setting `autoFocus` to 'off' and attempting to manually trigger autofocus using `cameraRef.current.autoFocusAsync()`, the autofocus may fail silently, resulting in blurry images. The camera preview appears normal, but images captured remain out of focus.  This is inconsistent and difficult to debug because there's no clear error message or indication of failure from the `autoFocusAsync()` call.