# Silent Autofocus Failure in Expo Camera API

This repository demonstrates a bug in the Expo Camera API where `cameraRef.current.autoFocusAsync()` fails silently when `autoFocus` is set to 'off'.  The issue leads to blurry images without any clear error indication.

## Problem

When using a custom camera configuration with `autoFocus: 'off'`, calling `cameraRef.current.autoFocusAsync()` to trigger manual focus does not always work. Images captured under these conditions are often blurry, despite the camera preview appearing correctly focused.

## Solution

The proposed solution uses a try-catch block to handle potential errors during `autoFocusAsync()`. While the function doesn't throw explicit exceptions, monitoring the promise's resolution provides a way to detect failure and potentially implement fallback mechanisms (like switching to auto focus mode temporarily or displaying a user message).  This improved error handling improves the user experience and makes debugging significantly easier.