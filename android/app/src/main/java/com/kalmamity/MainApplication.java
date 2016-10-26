package com.kalmamity;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.airbnb.android.react.maps.MapsPackage;

// import com.burlap.filetransfer.FileTransferPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.mikemonteith.reactnativeandroidcheckbox.CheckboxPackage;
// import com.centaurwarchief.smslistener.SmsListenerPackage;
import com.rhaker.reactnativesmsandroid.RNSmsAndroidPackage;
import com.burnweb.rnwebview.RNWebViewPackage;
import com.marianhello.react.BackgroundGeolocationPackage;
// import io.fullstack.firestack.FirestackPackage;

/*
// import com.burnweb.rnpermissions.RNPermissionsPackage;
// import com.mapbox.reactnativemapboxgl.ReactNativeMapboxGLPackage;
// import com.syarul.rnlocation.RNLocation;
// import com.tiagojdferreira.RNGeolocationPackage;
// import com.syarul.rnalocation.RNALocation;
*/

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
          // new FileTransferPackage(),
          new RCTCameraPackage(),
          new CheckboxPackage(),
          // new SmsListenerPackage(),
          new RNSmsAndroidPackage(),
          new RNWebViewPackage(),
          new BackgroundGeolocationPackage()
          // new FirestackPackage(getApplicationContext())
          // new RNPermissionsPackage(),
          // new ReactNativeMapboxGLPackage(),
          // new RNLocation(),
          // new RNGeolocationPackage(),
          // new RNALocation()
        );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
