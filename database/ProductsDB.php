<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/9
 * Time: 15:58
 */
require_once 'DBAbs.php';

class ProductsDB extends DBAbs
{
    const TABLE_NAME = 'products';
    private static $instance;

    protected function __construct($tableName)
    {
        parent::__construct($tableName);
    }

    public static function newInstance()
    {
        if (!self::$instance instanceof self)
            self::$instance = new ProductsDB(self::TABLE_NAME);
        return self::$instance;
    }

}