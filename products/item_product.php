<?php
/**
 * 对主页传进来的URL进行解析
 *
 * Date: 2015/12/9
 * Time: 16:55
 */
require_once '../config/Constant.php';
require_once '../database/ProductsDB.php';
require_once '../smarty/config.php';
require_once '../phpqrcode/phpqrcode.php';

//得到URL 传进来的id
$id = $_GET['id'];

if (!$smarty->isCached('item_product.tpl', $id)) {
    $itemProduct = readDatabase($id);
    $screenShotObject = parseJSON($itemProduct);
    generateQRCode($itemProduct);

    $smarty->assign('qrCodeImage', QR_NAME);
    $smarty->assign('itemProduct', $itemProduct);
    $smarty->assign('screenShotArray', $screenShotObject);
}
$smarty->display('item_product.tpl', $id);

/**
 * 生成QRCode
 */
function generateQRCode($itemProduct)
{
    //在这里要确保 products文件夹中apk名字 与 数据库名字一样
    $qrCodeHref = DOMAIN . '/products' . '/' . $itemProduct['download'];
    define('QR_NAME', 'itemQRCode.png');
    QRcode::png($qrCodeHref, QR_NAME, 'L', 5.5);
}

/**
 * 从数据库读取id=$id的products
 */
function readDatabase($id)
{
    return ProductsDB::newInstance()->fetchItemData($id);
}

/**
 * 由于在服务器的屏幕截图是以JSON数据存储的 这里把这些数据解析
 * @return array $screenShotObject 存储URL的数组
 */
function parseJSON($itemProduct)
{
    //取得Product的 screen_shot 这一项(Json表示)
    $screenShotJson = $itemProduct['screen_shot'];
    //把Json数据变为stdClass的Object对象
    $screenShotObject = json_decode($screenShotJson)->screen_shot;
    return $screenShotObject;
}
