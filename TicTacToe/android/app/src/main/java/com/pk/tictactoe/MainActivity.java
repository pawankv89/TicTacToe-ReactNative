package com.pk.tictactoe;

import com.facebook.react.ReactActivity;

import com.startapp.sdk.ads.banner.Banner;
import com.startapp.sdk.ads.banner.BannerListener;
import com.startapp.sdk.adsbase.StartAppAd;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "TicTacToe";
  }

  @Override
  public void onBackPressed() {
    StartAppAd.onBackPressed(this);  // StartAppAd on BackPressed
    super.onBackPressed();
  }

}
