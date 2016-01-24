<?php /* Smarty version 3.1.27, created on 2015-12-30 13:51:31
         compiled from "/Applications/MAMP/htdocs/MyPage/products/item_product.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:19089795315683d353d69412_93999925%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e75712c846cce476f5354e9e164da317033eb6c1' => 
    array (
      0 => '/Applications/MAMP/htdocs/MyPage/products/item_product.tpl',
      1 => 1451128397,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19089795315683d353d69412_93999925',
  'variables' => 
  array (
    'itemProduct' => 0,
    'qrCodeImage' => 0,
    'screenShotArray' => 0,
    'i' => 0,
    'screenShotItem' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5683d353e77722_94725014',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5683d353e77722_94725014')) {
function content_5683d353e77722_94725014 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '19089795315683d353d69412_93999925';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $_smarty_tpl->tpl_vars['itemProduct']->value['name'];?>
</title>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../css/productStyle.css">
    <?php echo '<script'; ?>
 type="Text/Javascript" src="../js/jquery.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 type="text/javascript" src="../js/sudoSlider.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
>
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
    <?php echo '</script'; ?>
>
</head>
<body>
<div class="outer-wrap menu-wrap">
    <div class="tip-menu-small tip-change-background">

    </div>
    <div class="inner-wrap menu">
        <a class="logo" id="logo" style=""></a>
        <span class="logo-text" id="logo_text" style=""><?php echo $_smarty_tpl->tpl_vars['itemProduct']->value['name'];?>
</span>
    </div>
</div>
<div class="outer-wrap main-content-wrap" id="main_content">
    <div class="inner-wrap main-content">
        <div class="main-content-left">
            
            <div class="demo-code-background">
                
                <span class="demo-code-img"><img src="<?php echo $_smarty_tpl->tpl_vars['qrCodeImage']->value;?>
"/></span>

                <p class="demo-code-text">Scan QRCode
                </p>
            </div>
            <div class="download-app">
                <ul>
                    <li id="download_android" style="">
                        <a class="download-android" href="<?php echo $_smarty_tpl->tpl_vars['itemProduct']->value['download'];?>
"></a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="main-content-right">
            <div class="android-background" style="">
                    <span class="android-inner-img" id="androidSlider">
						<ul>
                            <?php $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable(0, null, 0);?>
                            <?php
$_from = $_smarty_tpl->tpl_vars['screenShotArray']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['screenShotItem'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['screenShotItem']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['screenShotItem']->value) {
$_smarty_tpl->tpl_vars['screenShotItem']->_loop = true;
$foreach_screenShotItem_Sav = $_smarty_tpl->tpl_vars['screenShotItem'];
?>
                                <li style="display: none"><img src="<?php echo $_smarty_tpl->tpl_vars['screenShotItem']->value->{$_smarty_tpl->tpl_vars['i']->value};?>
"/>
                                </li>
                                <?php $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable($_smarty_tpl->tpl_vars['i']->value+1, null, 0);?>
                            <?php
$_smarty_tpl->tpl_vars['screenShotItem'] = $foreach_screenShotItem_Sav;
}
?>
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
</html><?php }
}
?>