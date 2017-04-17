<?php



// 将 views/index/index.html 这个文件放到这里
// include_once './views/index/index.html';

// 接收路径描述, 根据路径的描述 include 不同的 html 显示到页面中( 路由 route )
// var_dump( $_SERVER );
// 使用 PATH_INFO 来获得用户输入的 路径
// echo $_SERVER[ 'PATH_INFO' ];
// 需要一个东西可以判断数组中是否存在某一个键
// array_key_exists( key, array )


/*
$isExist = array_key_exists( 'PATH_INFO', $_SERVER );

// var_dump( $isExist );

// 如果没有输入路径应该显示的是 主页, 如果有路径就显示路径描述的页面
if ( $isExist ) {
    // 输入了路径
    include_once './views' . $_SERVER[ 'PATH_INFO' ] . '.html';
    // 输入的是长名字 还是 短名字呢?



} else {
    // 没有输入路径
    include_once './views/index/index.html';
}
*/



// 设定算法, 我们可以一开始就获得输入的 路径, 用 / 分隔一下
// 拿到自路径结构. 可以考虑如果分割后得到的是两个数据 就表明是长路径形式
// 如果分割后得到的是 1 个元素, 那么使用的 就是短路径形式


/*
$isExist = array_key_exists( 'PATH_INFO', $_SERVER );

if ( $isExist ) {
    $path_info = $_SERVER[ 'PATH_INFO' ];
    // 进行分隔, 判断长短
    // /index.php/index/index
    // /index.php/login
    // split
    // explode 函数可以用来分隔字符串
    // $path_infos = explode( '/', $path_info );
    // 1: 长路径   '/index/login'      [ '', 'index', 'login' ]
    // 2: 短路径   '/login'            [ '', 'login' ]  
    // 3: /        '/'                 [ '', '' ]

    // slice
    // substr

    $path_info = substr( $path_info, 1 ); // 将开始的 / 去除
    $path_infos = explode( '/', $path_info );

    // 如果是 '' 还是走默认的页面
    // 如果是两个元素 配置按照输入显示
    // 如果是一个那么就加上 index 显示
    if ( count( $path_infos ) == 2 ) {
        // 用输入的路径显示
    } elseif ( count( $path_infos ) == 1 && $path_infos[ 0 ] == '' ) {
        // 按照默认输入
    } else {
        // 嵌入 index 后在找出页面
    }
    var_dump( $path_infos );

} else {
    // 不用分隔直接获得路径 index index
    $path = 'index';
    $filename = 'index';
}
*/


// include_once( './views/' . $path . '/' . $filename . '.html' );


$isExist = array_key_exists( 'PATH_INFO', $_SERVER );

if ( $isExist ) {
    $path_info = $_SERVER[ 'PATH_INFO' ];
} else {
    $path_info = '/';
} 

$path_info = substr( $path_info, 1 );

$path_infos = explode( '/', $path_info );
// 1, ['']
// 2, ['名字']
// 3, [ '名字', '名字' ]
if ( count( $path_infos ) == 2 ) {
    $path = $path_infos[ 0 ];
    $filename = $path_infos[ 1 ];
} elseif ( strlen( $path_infos[ 0 ] ) > 0 ) {
    $path = 'index';
    $filename = $path_infos[ 0 ];
} else {
    $path = 'index';
    $filename = 'index';
}

include_once( './views/' . $path . '/' . $filename . '.html' );




?>