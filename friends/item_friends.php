<?php
/**
 * 对主页传进来的URL进行解析
 *
 * Date: 2015/12/9
 * Time: 16:55
 */
require_once '../config/Constant.php';
require_once '../database/FriendsDB.php';
require_once '../smarty/config.php';

//得到URL 传进来的id
$id = $_GET['id'];

if (!$smarty->isCached('item_friends.tpl', $id)) {
    $itemFriend = FriendsDB::newInstance();
    $smarty->assign('itemFriend', $itemFriend->fetchItemData($id));
}
$smarty->display('item_friends.tpl', $id);
