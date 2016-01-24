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
    protected static $tableName = 'products';
}