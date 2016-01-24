<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/9
 * Time: 14:58
 */
require_once 'D:/XAMPP/htdocs/MyPage/config/DBConfig.php';

abstract class DBAbs
{
    protected static $pdo;
    protected static $tableName;

    /**
     * late static binding @link http://php.net/manual/zh/language.oop5.late-static-bindings.php
     * 后期静态绑定的解析会一直到取得一个完全解析了的静态调用为止。另一方面，如果静态调用使用 parent:: 或者 self:: 将转发调用信息。
     */
    public static function newInstance()
    {
        if (static::$tableName == null)
            throw new Exception("子类没有设置需要操作的数据库的表名");
        return new static(static::$tableName);
    }

    protected function __construct($tableName)
    {
        try {
            if (self::$pdo == null)
                self::$pdo = new PDO(DATABASE_CONNECTION_CONFIG, DATABASE_USER_NAME, DATABASE_USER_PASSWORD);
        } catch (PDOException $e) {
            die("Database Connection Failure " . $e->getMessage());
        }
    }

    public function __destruct()
    {
        self::$pdo = null;
    }

    /**
     * @param int $limit 查询的个数 默认6
     * @param string $order 查询顺序默认by id
     * @return bool|PDOStatement 返回值为PDOStatement
     */
    public function &fetchData($limit = 6, $order = 'id')
    {
        $sqlStr = "SELECT * FROM " . static::$tableName . " ORDER BY $order LIMIT $limit";
        //Debug
        //$query = self::$pdo->query($sqlStr);
        //var_dump($query->fetchAll(PDO::FETCH_ASSOC));
        $res = self::$pdo->prepare($sqlStr);
        $res->execute();
        $res->setFetchMode(PDO::FETCH_LAZY);
        if ($res == null)
            return false;
        return $res;
    }

    public function fetchItemData($id)
    {
        $sqlStr = "SELECT * FROM  " . static::$tableName . " WHERE id = $id";
        $statement = self::$pdo->query($sqlStr);
        return $statement->fetchAll(PDO::FETCH_ASSOC)[0];
    }
}