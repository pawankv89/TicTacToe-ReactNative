package com.pk.tictactoe;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class BannerManager extends SimpleViewManager<BannerView> {

    @Override
    public String getName() {
        return "Banner";
    }

    @Override
    protected BannerView createViewInstance(ThemedReactContext reactContext) {

        return new BannerView(reactContext);
    }
}