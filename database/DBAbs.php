<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/9
 * Time: 14:58
 */
require_once '/Applications/MAMP/htdocs/MyPage/config/DBConfig.php';

abstract class DBAbs
{
    protected static $pdo;
    protected $tableName;

    /**
     * late static binding @see http://php.net/manual/zh/language.oop5.late-static-bindings.php
     * 后期静态绑定的解析会一直到取得一个完全解析了的静态调用为止。另一方面，如果静态调用使用 parent:: 或者 self:: 将转发调用信息。
     */
    public static function newInstance($tableName)
    {
        return new static($tableName);
    }

    protected function __construct($tableName)
    {
        //Debug
        //echo "Call " . __METHOD__ . "<br>";
        try {
            if (self::$pdo == null)
                self::$pdo = new PDO(DATABASE_CONNECTION_CONFIG, DATABASE_USER_NAME, DATABASE_USER_PASSWORD);
        } catch (PDOException $e) {
            die("Connection Failure " . $e->getMessage());
        }
        $this->tableName = $tableName;
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
        $sqlStr = "SELECT * FROM $this->tableName ORDER BY $order LIMIT $limit";
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
        $sqlStr = "SELECT * FROM $this->tableName WHERE id = $id";
        $statement = self::$pdo->query($sqlStr);
        return $statement->fetchAll(PDO::FETCH_ASSOC)[0];
    }
}