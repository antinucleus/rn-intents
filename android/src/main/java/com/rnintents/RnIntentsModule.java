package com.rnintents;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import android.content.Intent;
import android.net.Uri;

@ReactModule(name = RnIntentsModule.NAME)
public class RnIntentsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RnIntents";

  public RnIntentsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void sendIntent(String action, String schema, String ssp, Promise promise) {
    try {
      if (action.isEmpty()) {
        throw new Exception("Action name must be provided");
      }

      ReactApplicationContext context = getReactApplicationContext();
      Intent intent = new Intent();
      intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      intent.setAction(action);

      if (!(schema.isEmpty() && ssp.isEmpty())) {
        Uri uri = Uri.fromParts(schema, ssp, null);
        intent.setData(uri);
      }

      context.startActivity(intent);
    } catch (Exception e) {
      promise.reject("Send Intent Error", e);
    }


  }
}
