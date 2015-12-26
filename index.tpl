<!--
Author: Ferrair
Author URL: http://wangqihang.cn

1.$blogArray自己博客的二维数组
2.$friendsArray 朋友的二维数组
3.$travleArray 旅游照片的二维数组
-->

<!DOCTYPE html>
<html>
<head>
    <title>王启航</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="启航"/>

    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="css/swipebox.css" rel="stylesheet" type="text/css" media="all">

    <script src="js/jquery.swipebox.min.js"></script>
    <script src="js/responsiveslides.min.js"></script>
    <script src="js/classie.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/checkInput.js"></script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        var $ = jQuery.noConflict(); //jQuery用 $代替jQuery 这句代码防止冲突
        //点击菜单每一项跳转到相应布局
        $(document).ready(function () {
            $(".scroll").click(function (event) {
                event.preventDefault();
                $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
                $('#box').animate({'top': '-1000px'}, 100);
            });
        });
        //打开或关闭菜单
        $(function () {
            $('#openSettingBtn').click(function () {
                $('#box').animate({'top': '0px'}, 300);
            });
            $('#closeSettingBtn').click(function () {
                $('#box').animate({'top': '-1000px'}, 900);
            });
        });
    </script>
    <script type="text/javascript">
        //验证表单输入
        function checkInput(thisForm) {
            with (thisForm) {
                var mCheck = new CheckInput();
                return mCheck.isEmpty(mailName, "为什么不告诉我你是谁!😔") && mCheck.isEmpty(mailAddress, "请吧邮箱地址给我吧,好和你联系哦💔") && mCheck.isEmpty(mailSubject, "你的建议") && mCheck.isEmail(mailAddress, '你骗我😂,这不是邮箱');
            }
        }
    </script>
    <script type="text/javascript">
        //回到顶部 plugin
        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    </script>
    <script type="text/javascript">
        //朋友 lightBox plugin
        jQuery(function ($) {
            $(".swipebox").swipebox();
        });
    </script>
    <script type="text/javascript">
        //ResponsiveSlides plugin
        $(function () {
            $("#slider3").responsiveSlides({
                auto: true,
                pager: false,
                nav: true,
                speed: 500,
                namespace: "wqh"
            });
        });
    </script>

</head>
<body>
<!-- banner 头部的菜单栏-->
<div class="banner" id="home">
    <div class="container">
        <div class="top-header row">
            <!--top-nav---->
            <div class="top-nav">
                <div class="nav-icon">
                    <a href="#" class="right_bt" id="openSettingBtn"><span> </span> </a>
                </div>
                <div class="box" id="box">
                    <div class="box_content">
                        <div class="box_content_center">
                            <div class="form_content">
                                <div class="menu_box_list">
                                    <ul>
                                        <li><a class="scroll" href="#home"><span>主页君</span></a></li>
                                        <li><a class="scroll" href="#services"><span>产品</span></a></li>
                                        <li><a class="scroll" href="#travel"><span>足迹</span></a></li>
                                        <li><a class="scroll" href="#friends"><span>好朋友</span></a></li>
                                        <li><a class="scroll" href="#blog"><span>博客</span></a></li>
                                        <li><a class="scroll" href="#contact"><span>联系我</span></a></li>
                                    </ul>
                                </div>
                                <a class="boxclose" id="closeSettingBtn"> <span> </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-info">
            <div class="banner-left">
                <img src="images/1.jpg" alt=""/>
            </div>
            <div class="banner-right">
                <h2>I 'M 王启航</h2>

                <div class="border"></div>
                <h3>Stay Hunger,Stay Foolish.</h3>
            </div>

        </div>
    </div>
</div>
<!--about 关于我-->
<div class="about text-center" id="about">
    <div class="container">
        <h3>个人简介</h3>

        <div class="strip text-center"><img src="images/about.png" alt=" "/></div>
        <p>我是一名电子科技大学信息与软件工程学院的大二学生，爱技术，有理想，爱旅游，有想法。
            家住安徽宣城.
        </p>
        <ul>
            <li><a class="qq" href="#"></a></li>
            <li><a class="wechat" href="#"></a></li>
            <li><a class="weibo" href="#"></a></li>
        </ul>
    </div>
</div>

<!--product 我的产品-->
<div class="services text-center" id="services">
    <div class="container">
        <div class="ser-info">
            <h3>我与我的团队做的东西</h3>
        </div>
        <div class="strip text-center"><img src="images/ser.png" alt=" "/></div>
        <div class="ser-grids">
            <{foreach $productsArray as $productItem}>
                <div class="col-md-3 ser-grid">
                    <a href="products/item_product.php?id=<{$productItem[$smarty.const.PRODUCT_ID]}>"><img
                                src="images/<{$productItem[$smarty.const.PRODUCT_IMAGE]}>" height="200dp"
                                width="200dp" alt="APP Image"></a>

                    <h3>
                        <a href="products/item_product.php?id=<{$productItem[$smarty.const.PRODUCT_ID]}>"><{$productItem[$smarty.const.PRODUCT_NAME]}></a>
                    </h3>

                    <p><{$productItem[$smarty.const.PRODUCT_DES]}></p>
                </div>
            <{/foreach}>
        </div>
    </div>
</div>

<!--blog 我的博客-->
<div class="blog" id="blog">
    <div class="container">
        <div class="blog-info text-center">
            <h3><a href="wordpress/">博客</a></h3>

            <div class="strip text-center"><img src="images/blog.png" alt=" "/></div>
        </div>
        <div class="blog-grids">
            <{*从数据库里面取出所有的Blog 并进行显示*}>
            <{foreach $blogArray as $blogItem}>
                <div class="col-md-4 blog-text-info">
                    <div class="blog-grid">
                        <a href="<{$blogItem->guid}>"><img src="images/a.jpg" alt=""/></a>

                        <div class="blog-text">
                            <a href="<{$blogItem->guid}>"><{$blogItem->post_title}></a>
                            <div class="horizontalLine"></div>
                            <p><{$blogItem->post_content|mb_substr:0:40:'UTF-8'}>...</p>
                        </div>

                        <div class="blog-para">
                            <ul>
                                <li><{$blogItem->comment_count}> 条评论</li>
                            </ul>
                        </div>
                        <div class="blog-pos">
                            <p><{$blogItem->post_date|date_format:'%m'}>
                                <span><{$blogItem->post_date|date_format:'%d'}></span></p>
                        </div>
                    </div>
                </div>
            <{/foreach}>
        </div>
    </div>
</div>

<!--friends 这里介绍自己的朋友-->
<div class="testimonials" id="friends">
    <div class="container">
        <h3>朋友一生一起走</h3>

        <div class="strip text-center"><img src="images/test.png" alt=" "/></div>

        <div id="top" class="callbacks_container">
            <ul class="rslides" id="slider3">
                <{foreach $friendsArray as $friendItem}>
                    <li>
                        <div class="test-banner">
                            <img class="quoa" src="images/quo2.png" alt=""/>

                            <div class="test-left">
                                <a href="friends/item_friends.php?id=<{$friendItem[$smarty.const.FRIEND_ID]}>"><img
                                            src="images/<{$friendItem[$smarty.const.FRIEND_IMAGE]}>"
                                            alt="Friend Image"/></a>
                            </div>
                            <div class="test-right">
                                <h4>
                                    <a href="friends/item_friends.php?id=<{$friendItem[$smarty.const.FRIEND_ID]}>">我的<{$friendItem[$smarty.const.FRIEND_RELATION]}><{$friendItem[$smarty.const.FRIEND_NAME]}></a>
                                </h4>

                                <p><{$friendItem[$smarty.const.FRIEND_SIGN]|default:'这个人很拘束，什么都没有留下'}></p>
                            </div>
                            <img class="quo" src="images/quo1.png" alt=""/>
                        </div>
                    </li>
                <{/foreach}>
            </ul>
        </div>
    </div>
</div>

<!--travel 我的足迹-->
<div class="gallery-section text-center" id="travel">
    <div class="container">
        <h3>世界那么大</h3>

        <div class="strip text-center"><img src="images/port.png" alt=" "/></div>
        <div class="gallery-grids">
            <div class="top-gallery">
                <{foreach $travelArray as $travelItem}>
                    <div class="col-md-4 gallery-grid gallery1">
                        <a href="images/<{$travelItem['imageUrl']}>" class="swipebox"><img
                                    src="images/<{$travelItem['imageUrl']}>" class="img-responsive" alt="/">
                            <div class="textbox">
                                <h4><{$travelItem['name']|default:"旅游照片"}></h4>
                                <p><{$travelItem['description']|default:"照的还不错吧"}></p>
                                <div class="button"><a href="images/<{$travelItem['imageUrl']}>"
                                                       class="swipebox">查看大图</a></div>
                            </div>
                        </a>
                    </div>
                <{/foreach}>
            </div>
        </div>
    </div>
</div>

<!--contact 联系我-->
<div class="contact" id="contact">
    <div class="container">
        <div class="contact-info text-center">
            <h3>CONTACT</h3>

            <div class="strip text-center"><img src="images/con1.png" alt=" "/></div>
        </div>
        <div class="contact-grids">
            <div class="col-md-5 contact-left">
                <h3>Say Hi to Me</h3>

                <div class="horizontalLine"></div>
                <ul>
                    <li>四川省成都市</li>
                    <li>成华区东一环</li>
                    <li>电子科大沙河校区</li>
                    <li><a href="https://mail.qq.com/cgi-bin/loginpage">1906362072@qq.com</a></li>
                    <li><a href="#">www.wangqihang.cn</a></li>
                </ul>
            </div>
            <div class="col-md-7 contact-right">
                <h3>帮助启航改进该网站</h3>
                <div class="horizontalLine"></div>
                <form action="sendMail/sendMailToMe.php" method="post" onsubmit="return checkInput(this)">
                    <input name="mailName" type="text" placeholder="Name">
                    <input name="mailAddress" type="text" placeholder="Your E-mail">
                    <textarea name="mailSubject" type="text" placeholder="Your Suggestion"></textarea>
                    <input type="submit" value="给我留言">
                </form>
            </div>
        </div>
    </div>
</div>

<!--footer 底部文字-->
<div class="footer-top"></div>
<div class="footer">
    <div class="container">
        <p>Copyright &copy; 2015 Ferrair.<a href="https://github.com/Ferrair/MyPage">Fork me</a></p>
    </div>
</div>
</body>
</html>