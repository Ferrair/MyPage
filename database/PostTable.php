<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/12/8
 * Time: 23:54
 */
require_once(ROOT_DIR . '/wordpress/wp-blog-header.php');

class PostTable
{

    public static function fetchPostTable($order = 'id', $limit = 3)
    {
        $sqlStr = "SELECT * FROM wp_posts WHERE post_status = 'publish' ORDER BY $order LIMIT $limit";
        global $wpdb;
        $result = $wpdb->get_results($sqlStr);
        if ($result != null)
            return $result;
        return false;
    }
}


