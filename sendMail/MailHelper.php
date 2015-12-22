<?php

/**
 * User: WQH
 * Date: 15/12/20
 * Time: 下午1:23
 */
require("class.phpmailer.php");
require("class.smtp.php");

class MailHelper
{
    var $mail;
    var $isDebug;

    /**
     * @param bool $isDebug :是否开启调试模式 默认false
     */
    public function __construct($isDebug = false)
    {
        $this->isDebug = $isDebug;
        date_default_timezone_set('Asia/Shanghai');
        $this->mail = new PHPMailer(true);
        if ($this->isDebug)
            $this->mail->SMTPDebug = 4;

        $this->mail->isSMTP();
        $this->mail->CharSet = "utf-8";
        $this->mail->Host = "smtp.qq.com";
        $this->mail->Port = 465;
        $this->mail->SMTPSecure = 'ssl';
        $this->mail->SMTPAuth = true;
        $this->mail->Username = "1906362072@qq.com";
        $this->mail->Password = "ysjsicklnjvpfbhe";

        $this->mail->From = "1906362072@qq.com";
        $this->mail->FromName = '来自<王启航>的信息';
    }

    /**
     * @param $mailTitle :邮件的主题
     * @param $mailSubject :邮件的内容
     * @param string $toWho :邮件发给谁 默认为 1906362072@qq.com
     * @return bool  发送成功返回true
     */
    public function sendMail($mailTitle, $mailSubject, $toWho = '1906362072@qq.com')
    {
        $this->mail->AddAddress($toWho, "");
        $this->mail->Subject = $mailTitle;
        $this->mail->Body = $mailSubject;
        if ($this->mail->Send()) //发送成功
            return true;
        else {
            if ($this->isDebug)
                echo 'Mailer Error: ' . $this->mail->ErrorInfo;
            return false;
        }
    }
}