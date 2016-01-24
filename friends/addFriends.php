<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>跳转页面</title>
    <script src="../js/jumpTo.js"></script>
</head>
<body>
<?php
require_once '../database/FriendsDB.php';
require_once '../util/PhotoThumb.php';
require_once '../smarty/config.php';

$smarty->clearCache('index.tpl');

list($mName, $mRelation, $mSignature, $fileName) = handleInput();
$mFriendDB = FriendsDB::newInstance(FriendsDB::TABLE_NAME);

PhotoThumb::generateThumb('../images/' . $fileName, '../images/' . PhotoThumb::AFTER . $fileName);

if ($mFriendDB->saveData($mName, $mRelation, $mSignature, PhotoThumb::AFTER . $fileName))
    echo "操作成功,<span id = \"jumpTo\">5</span>秒后将自动跳转到主页.. <script type = \"text/javascript\">countDown(5, 'http://www.wangqihang.cn/');</script>";
else
    echo "操作失败,<span id = \"jumpTo\">5</span>秒后电脑将爆炸........<script type = \"text/javascript\">countDown(5, 'http://www.wangqihang.cn/');</script>";


function handleInput()
{
    $mFile = $_FILES['mFile'];
    $mName = $_POST['mName'];
    $mRelation = $_POST['mRelation'];
    $mSignature = $_POST['mSignature'];

    $fileName = $mFile['name'];
    move_uploaded_file($mFile['tmp_name'], "../images/" . $fileName);
    return array($mName, $mRelation, $mSignature, $fileName);
}


?>
</body>
</html>