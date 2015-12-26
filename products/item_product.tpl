<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><{$itemProduct['name']}></title>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../css/productStyle.css">
    <script type="Text/Javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/sudoSlider.js"></script>
    <script>
        $(document).ready(function () {
            autoHeight();
            //找到 id=androidSlider ul li 第一个元素
            $("#androidSlider ul li").eq(0).show();

            if ($("#androidSlider ul li").size() >= 2) {
                $("#androidSlider").sudoSlider({
                    speed: '600',
                    auto: true,
                    width: 277,
                    height: 493,
                    continuous: true,
                    prevNext: false
                });
            }
            //中间主内容区，高度自适应
            function autoHeight() {
                if (document.documentElement.clientHeight > 765) {
                    document.getElementById("main_content").style.height = document.documentElement.clientHeight - 180 + "px";
                } else {
                    document.getElementById("main_content").style.height = 765 + "px";
                }
            }
        });
    </script>
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
                    <span class="android-inner-img" id="androidSlider">
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
        <p>制作:王启航</p>
    </div>
</div>
</body>
</html>