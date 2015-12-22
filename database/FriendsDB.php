<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/9
 * Time: 14:54
 */
require_once 'DBAbs.php';

class FriendsDB extends DBAbs
{
    const TABLE_NAME = 'friends';
    private static $instance;

    protected function __construct($tableName)
    {
        parent::__construct($tableName);
    }

    public static function newInstance()
    {
        if (!self::$instance instanceof self)
            self::$instance = new FriendsDB(self::TABLE_NAME);
        return self::$instance;
    }

    /**
     * @param string $name :朋友的姓名
     * @param string $relation :朋友与我的关系
     * @param string $signature :一段描述
     * @param string $photoName :照片名字
     * @return bool 保存成功 return true | 保存失败 return false
     */
    public function saveData($name, $relation, $signature, $photoName)
    {
        $this->pdo->beginTransaction();
        $stem = $this->pdo->prepare("INSERT INTO $this->tableName VALUES (NULL,?,?,?,?);");
        $stem->execute(array($name, $relation, $signature, $photoName));
        if ($this->pdo->commit())
            return true;
        return false;
    }
}
