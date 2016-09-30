package com.kalmamity;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.burlap.filetransfer.FileTransferPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.mikemonteith.reactnativeandroidcheckbox.CheckboxPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MapsPackage(),
          new FileTransferPackage(),
          new RCTCameraPackage(),
          new CheckboxPackage()
        );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
