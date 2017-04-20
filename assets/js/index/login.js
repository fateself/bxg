
// login 模块
define( [ 'jquery', 'cookie' ], function ( $ ) {


         $( '#loginForm' ).on( 'submit', function ( e ) {


            // 在 jq 中提供了一个方法 序列化( serialize )
            var formData = $( this ).serialize();

            // 真正的请求数据
            $.ajax({
                url: '/api/login',                      // 请求的目标地址
                type: 'post',                           // 请求方法
                data: formData,                         // 请求是发送的数据
                success: function ( info ) {    // 请求成功后执行回调
                    // console.log( info );
                    if ( info.code == 200 ) {

                        alert( '登录成功' );

                        // 存储数据 
                        $.cookie( 'profile', JSON.stringify( info.result ), { path: '/' } );

                        // 跳转
                        location.href = '/';
                    }
                }
            });



            return false; // hack 方法
            // e.preventDefault();  // jq 标准方法
        });

/*    // 完成登录
    $( '#loginForm' ).on( 'submit', function ( e ) {


        // 在 jq 中提供了一个方法 序列化( serialize )
        var formData = $( this ).serialize();

        // 真正的请求数据
        $.ajax({
            url: '/api/login',                      // 请求的目标地址
            type: 'post',                           // 请求方法
            data: formData,                         // 请求是发送的数据
            success: function ( info ) {    // 请求成功后执行回调
                // console.log( info );
                if ( info.code == 200 ) {

                    alert( '登录成功' );

                    // 存储数据 
                    $.cookie( 'profile', JSON.stringify( info.result ), { path: '/', expires: 7 } );

                    // 跳转
                    location.href = '/';
                }
            }
        });



        return false; // hack 方法
        // e.preventDefault();  // jq 标准方法
    });*/


});