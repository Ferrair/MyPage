<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/8
 * Time: 23:54
 */
require_once(ROOT_DIR . '/wordpress/wp-blog-header.php');
require_once 'MemCacheUtil.php';

class PostTable
{

    public static function fetchPostTable($order = 'id', $limit = 3)
    {
        //只查询需要的数据
        $sqlStr = "SELECT post_title,guid,post_content,comment_count,post_date FROM wp_posts WHERE post_status = 'publish' ORDER BY $order LIMIT $limit";
        $memCache = new MemCacheUtil();
        $cacheData = $memCache->get(md5($sqlStr));
        //数据已经缓存
        if ($cacheData) {
            echo 'Data Has Cached In Memory<br>';
            $memCache = null;
            return $cacheData;
        }

        global $wpdb;
        $result = $wpdb->get_results($sqlStr);
        if ($result != null) {
            $memCache->set(md5($sqlStr), $result, true); //设置数据缓存
            $memCache = null;
            return $result;
        }
        $memCache = null;
        return false;
    }
}


