<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>发送邮件</title>
    <script src="../js/jumpTo.js"></script>
</head>
<body>
<?php
/**
 * User: WQH
 * Date: 15/12/19
 * Time: 下午7:27
 */

require_once 'MailHelper.php';

$mailName = $_POST['mailName'];
$mailAddress = $_POST['mailAddress'];
$mailSubject = $_POST['mailSubject'];
//Debug
//echo 'mailName = ' . $mailName . '<br>';
//echo 'mailAddress = ' . $mailAddress . '<br>';
//echo 'mailSubject = ' . $mailSubject . '<br>';

$mHelper = new MailHelper();
if ($mHelper->sendMail($mailName . '(' . $mailAddress . ')' . "给我的反馈", $mailSubject)) {
    //echo "操作成功,<span id = \"jumpTo\">5</span>秒后将自动跳转到主页.. <script type = \"text/javascript\">countDown(5, 'http://www.wangqihang.cn/');</script>";
}
?>

</body>
</html>

