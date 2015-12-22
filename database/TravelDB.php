<?php

require_once 'DBAbs.php';

class TravelDB extends DBAbs
{
    const TABLE_NAME = 'travels';
    private static $instance;

    protected function __construct($tableName)
    {
        parent::__construct($tableName);
    }

    public static function newInstance()
    {
        if (!self::$instance instanceof self)
            self::$instance = new TravelDB(self::TABLE_NAME);
        return self::$instance;
    }
}
