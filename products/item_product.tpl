<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><{$itemProduct['name']}></title>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic'
          rel='stylesheet' type='text/css'>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body, html {
            width: 100%
            font-family: Consolas, serif;
        }

        ul li {
            list-style-type: none
        }

        a {
            cursor: pointer;
        }

        .outer-wrap {
            width: 100%;
        }

        .inner-wrap {
            width: 1024px;
            margin: 0 auto;
            position: relative;
        }

        .menu-wrap {
            height: 85px;
            background: #333b46;
            color: #ffffff;
            position: relative;
        }

        .menu-wrap .logo {
            display: inline-block;
            width: 59px;
            height: 59px;
            margin: 10px 0 0 0;
            float: left;
            background: url("");
        }

        .menu-wrap .logo-text {
            display: inline-block;
            height: 59px;
            line-height: 59px;
            margin: 10px 0 0 10px;
            float: left;
            font-size: 24px;
            font-family: Consolas, serif;
        }

        .main-content-wrap {
            height: 710px;
            background: #3c4552;
        }

        .main-content .main-content-left {
            width: 228px;
            margin: 90px 0 0 120px;
            float: left;
            position: relative;
        }

        /*二维码背景*/
        .main-content .main-content-left .demo-code-background {
            height: 314px;
            width: 228px;
            background: url("http://eatting.bmob.cn/images/demo-code-background.png") no-repeat;
        }

        .main-content .main-content-left .demo-code-background .demo-code-img {
            display: block;
            padding: 35px 0 0 0;
            margin: 0 0 0 15px;
        }

        .main-content .main-content-left .demo-code-background .demo-code-text {
            text-align: center;
            font-size: 12px;
            color: #9fa0a0;
            line-height: 20px;
            margin: 10px 0 0 0;
        }

        .main-content .main-content-left .download-app {
            margin: 70px 0 0 0;
            position: relative;
        }

        .main-content .main-content-left .download-app ul li a {
            display: block;
            width: 178px;
            height: 59px;
            margin: 30px auto 0;
        }

        .main-content .main-content-left .download-app ul li .download-android {
            background: url("http://eatting.bmob.cn/images/download-android.png") no-repeat;
        }

        .main-content .main-content-left .download-app ul li .download-android:hover {
            background: url("http://eatting.bmob.cn/images/download-android-hover.png") no-repeat;
        }

        .main-content .main-content-right {
            position: relative;
            float: right;
            margin: 40px 100px 0 0;
        }

        /*.main-content .main-content-right .iphone-background {
            width: 338px;
            height: 663px;
            overflow: hidden;
            float: left;
            background: url("http://eatting.bmob.cn/images/iphone.png") no-repeat;
        }*/

        .main-content .main-content-right .android-background {
            width: 350px;
            height: 663px;
            overflow: hidden;
            float: left;
            background: url("http://eatting.bmob.cn/images/android.png") no-repeat;
        }

        .main-content .main-content-right .android-background .android-inner-img {
            float: left;
            margin: 80px 0 0 45px;
            overflow: hidden;
        }

        .footer-wrap {
            height: 95px;
            background: #333b46;
            color: #4d5662;
        }

        .footer-wrap .footer {
            text-align: center;
        }

        .footer-wrap .footer p {
            display: block;
            text-align: center;
            margin: 0 auto;
            padding: 40px 0 0 0;
        }
    </style>
</head>
<body>
<div class="outer-wrap menu-wrap">
    <div class="tip-menu-small tip-change-background">

    </div>
    <div class="inner-wrap menu">
        <a class="logo" id="logo" style=""></a>
        <span class="logo-text" id="logo_text" style=""><{$itemProduct['name']}></span>
    </div>
</div>
<div class="outer-wrap main-content-wrap" id="main_content">
    <div class="inner-wrap main-content">
        <div class="main-content-left">
            <{*<{$itemProduct['description']}>*}>
            <div class="demo-code-background">
                <{*二维码*}>
                <span class="demo-code-img"><img src="<{$qrCodeImage}>"/></span>

                <p class="demo-code-text">Scan QRCode
                </p>
            </div>
            <div class="download-app">
                <ul>
                    <li id="download_android" style="">
                        <a class="download-android" href="<{$itemProduct['download']}>"></a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="main-content-right">
            <div class="android-background" style="">
                    <span class="android-inner-img" id="slider_android">
						<ul>
                            <{$i=0}>
                            <{foreach $screenShotArray as $screenShotItem}>
                                <li style="display: none"><img src="<{$screenShotItem->$i}>"/>
                                </li>
                                <{$i=$i+1}>
                            <{/foreach}>
                        </ul>
                      </span>
            </div>
        </div>
    </div>
</div>
<div class="outer-wrap footer-wrap">
    <div class="inner-wrap footer">
        <p>制作：Ferrair,DA Wizards工作室</p>
    </div>
</div>
</body>
<script type="Text/Javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="http://eatting.bmob.cn/js/jquery.sudoSlider.min.js"></script>
<script>

    $(document).ready(function () {
        //中间主内容区，高度自适应
        function auto_height() {
            if (document.documentElement.clientHeight > 765) {
                document.getElementById("main_content").style.height = document.documentElement.clientHeight - 180 + "px";
            } else {
                document.getElementById("main_content").style.height = 765 + "px";
            }
        }

        auto_height();


        //根据 li的个数决定是否使用走马灯
        if ($("#slider_android ul li").size() >= 2) {

            $("#slider_android ul li").eq(0).show();

            //调用sudoslider插件，实现手机画面切换效果
            var sudoSliderArdroid = $("#slider_android").sudoSlider({
                speed: '600',
                auto: true,
                width: 277,
                height: 493,
                continuous: true,
                prevNext: false
            });
        } else if ($("#slider_android ul li").size() == 1) {
            //如果只有一张图片，则显示第一张图片
            $("#slider_android ul li").eq(0).show();
        }

        //根据 li的个数决定是否使用走马灯
        if ($("#slider_iphone ul li").size() >= 2) {

            $("#slider_iphone ul li").eq(0).show();

            //调用sudoslider插件，实现手机画面切换效果
            var sudoSliderIphone = $("#slider_iphone").sudoSlider({
                speed: '600',
                auto: true,
                continuous: true,
                prevNext: false
            });
        } else if ($("#slider_iphone ul li").size() == 1) {
            //如果只有一张图片，则显示第一张图片
            $("#slider_iphone ul li").eq(0).show();
        }


        var initMenuBackground = $(".menu-wrap").css('background');
        var initMenuColor = $(".menu-wrap").css('color');
        var initMainContentBackground = $(".main-content-wrap").css('background');
        var initFooterBackground = $(".footer-wrap").css('background');
        var initFooterColor = $(".footer-wrap").css('color');
        var themeStyle0 = {
            menuBackground: initMenuBackground,
            menuColor: initMenuColor,
            mainContentBackground: initMainContentBackground,
            footerBackground: initFooterBackground,
            footerColor: initFooterColor
        }
        var themeStyle1 = {
            menuBackground: '#f6f7ff',
            menuColor: '#656565',
            mainContentBackground: '#626eb3',
            footerBackground: '#f6f7ff',
            footerColor: '#9297b6'
        }
        var themeStyle2 = {
            menuBackground: '#636a97',
            menuColor: '#ffffff',
            mainContentBackground: '#777eab',
            footerBackground: '#636a97',
            footerColor: '#9297b6'
        }
        var themeStyle3 = {
            menuBackground: '#49505f',
            menuColor: '#ffffff',
            mainContentBackground: 'url("http://assets.bmob.cn/images/1-4background.png") no-repeat',
            footerBackground: '#272b3c',
            footerColor: '#9fa0a0'
        }

        var changeTheme = function (themeStyle) {
            $(".menu-wrap").css({'background': themeStyle.menuBackground, 'color': themeStyle.menuColor});
            $(".main-content-wrap").css({'background': themeStyle.mainContentBackground});
            $(".footer-wrap").css({'background': themeStyle.footerBackground, 'color': themeStyle.footerColor});
        }

        //根据用户的默认值设置模板
        var userDefaultTheme = 0;

        switch (userDefaultTheme) {
            case 1:
                userDefaultTheme = themeStyle1;
                break;
            case 2:
                userDefaultTheme = themeStyle2;
                break;
            case 3:
                userDefaultTheme = themeStyle3;
                break;
            default :
                userDefaultTheme = themeStyle0;
                break;
        }
        changeTheme(userDefaultTheme);

    });


</script>
</html>