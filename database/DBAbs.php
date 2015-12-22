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
    var $pdo;
    var $tableName;

    protected function __construct($tableName)
    {
        try {
            $this->pdo = new PDO(DATABASE_CONNECTION_CONFIG, DATABASE_USER_NAME, DATABASE_USER_PASSWORD);
        } catch (PDOException $e) {
            die("Connection Failure " . $e->getMessage());
        }
        $this->tableName = $tableName;
    }

    public function __destruct()
    {
        $this->pdo = null;
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
        //$query = $this->pdo->query($sqlStr);
        //var_dump($query->fetchAll(PDO::FETCH_ASSOC));

        $res = $this->pdo->prepare($sqlStr);
        $res->execute();
        $res->setFetchMode(PDO::FETCH_LAZY);
        if ($res == null)
            return false;
        return $res;
    }

    public function fetchItemData($id)
    {
        $sqlStr = "SELECT * FROM $this->tableName WHERE id = $id";
        $statement = $this->pdo->query($sqlStr);
        return $statement->fetchAll(PDO::FETCH_ASSOC)[0];
    }
}