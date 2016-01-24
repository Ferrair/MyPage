<?php

define('ROOT_DIR', __DIR__);

require_once 'config/Constant.php';
require_once 'database/PostTable.php';
require_once 'database/FriendsDB.php';
require_once 'database/ProductsDB.php';
require_once 'database/TravelDB.php';
require_once 'smarty/config.php';

//如果已有缓存 就不需要操作数据库
if (!$smarty->isCached('index.tpl')) {
    readDatabase($smarty);
}
$smarty->display("index.tpl");


function readDatabase(Smarty $smarty)
{
    //Blog
    $smarty->assign("blogArray", PostTable::fetchPostTable('-comment_count'));

    //Products
    $productsArray = ProductsDB::newInstance();
    $smarty->assign("productsArray", $productsArray->fetchData(3));

    //Travel
    $travelArray = TravelDB::newInstance();
    $smarty->assign("travelArray", $travelArray->fetchData(6));
}