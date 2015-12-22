<?php
/**
 * 对于PDO数据库的基本信息的操作
 *
 * @see ../database/DBAbs.php
 * @see ../wordpress/wp-config.php(要同步)
 */

define('DATABASE_NAME', 'wqh');
define('DATABASE_HOST', 'localhost');

define("DATABASE_CONNECTION_CONFIG", 'mysql:host=' . DATABASE_HOST . ';dbname=' . DATABASE_NAME . ';charset=utf8');
define('DATABASE_USER_NAME', 'root');
define('DATABASE_USER_PASSWORD', 'root');