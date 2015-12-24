<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/11/28
 * Time: 13:43
 */
include_once('Smarty.class.php');
define('SMARTY_ROOT', '..' . '/smarty/src');
$smarty = new Smarty();
// 如果不配置这三个目录，smarty会自动建立
$smarty->setTemplateDir(SMARTY_ROOT . "/templates"); //设置模板目录
$smarty->setCompileDir(SMARTY_ROOT . "/templates_c"); //设置编译目录
$smarty->setCacheDir(SMARTY_ROOT . "/cache"); //缓存文件夹，开启缓存后会在这个目录生成缓存文件
$smarty->compile_check = true; //检查模版是否改变(上线之后改为false)
$smarty->debugging = false;  // 开启调试
$smarty->caching = true; // 开启缓存
$smarty->cache_lifetime = 120;  // 缓存有效期
$smarty->left_delimiter = '<{';  // 左定界符
$smarty->right_delimiter = '}>';  // 右定界符

