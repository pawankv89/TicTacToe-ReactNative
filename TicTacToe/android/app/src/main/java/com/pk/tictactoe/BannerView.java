package com.pk.tictactoe;
import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import androidx.appcompat.widget.AppCompatButton;

import com.startapp.sdk.ads.banner.Banner;
import com.startapp.sdk.adsbase.StartAppAd;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;
import static android.view.ViewGroup.LayoutParams.WRAP_CONTENT;

public class BannerView extends Banner {

    public BannerView(Context context) {
        super(context);
        Banner banner = new Banner(context);
    }

    public BannerView(Context context, AttributeSet attrs) {
        super(context, attrs);
        Banner banner = new Banner(context);
    }

    public BannerView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        Banner banner = new Banner(context);
    }
}

/*

public class BannerView extends Button {

    public BannerView(Context context) {
        super(context);
        this.setTextColor(Color.BLUE);
        this.setText("This button is created from JAVA code");
    }

    public BannerView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public BannerView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }
}
 */

