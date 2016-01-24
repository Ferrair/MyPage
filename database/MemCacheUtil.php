<?php

/**
 * Created by WQH
 * Date: 2016/1/24
 * Time: 13:12
 */
class MemCacheUtil
{
    private static $memCache;

    /**
     * MemCacheUtil constructor.构造MemCache连接
     */
    public function __construct()
    {
        if (self::$memCache == null) {
            self::$memCache = new Memcache();
            if (!self::$memCache->connect('localhost')) {
                die("MemCache Connection Failure ");
            }
        }
    }

    public function __destruct()
    {
        self::$memCache->close();
        self::$memCache = null;
    }

    /**
     * @param string $key
     * @param $value
     * @param bool $isCompressed 是否压缩
     * @param int $expireTime 过期时间 默认为一天
     */
    public function set($key, $value, $isCompressed = false, $expireTime = 3600 * 12)
    {
        self::$memCache->set($key, $value, $isCompressed ? MEMCACHE_COMPRESSED : false, $expireTime);
    }

    public function get($key)
    {
        return self::$memCache->get($key);
    }

    /**
     * 清空所有缓存
     */
    public function flush()
    {
        self::$memCache->flush();
    }

    public function delete($key)
    {
        self::$memCache->delete($key);
    }

}