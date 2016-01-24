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
    protected static $tableName = 'friends';

    /**
     * @param string $name :朋友的姓名
     * @param string $relation :朋友与我的关系
     * @param string $signature :一段描述
     * @param string $photoName :照片名字
     * @return bool 保存成功 return true | 保存失败 return false
     */
    public function saveData($name, $relation, $signature, $photoName)
    {
        parent::$pdo->beginTransaction();
        $stem = parent::$pdo->prepare("INSERT INTO " .static::$tableName. " VALUES (NULL,?,?,?,?);");
        $stem->execute(array($name, $relation, $signature, $photoName));
        if (parent::$pdo->commit())
            return true;
        return false;
    }
}
