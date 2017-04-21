/*
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});*/
/*  console.log(1);
  if ( !$.cookie('PHPSESSID') && location.pathname != "/index.php/login" ) {
    console.log(1);
    location.pathname = "/index.php/login";
  }

  // 页面加载的时候 从 cookie 中取出用户信息, 加载 图片与名字
  var profile = JSON.parse( $.cookie( 'profile' ) );

  // console.log( template );
  var html = template( 'profileId', profile );
  $( '.aside .profile' ).html( html );*/

  define( [
    'jquery'
    ,'template'
    ,'nprogress'
    ,'cookie'] 
    ,function ( $ , template , nprogress){

      if ( !$.cookie( 'PHPSESSID' ) && location.pathname != '/index.php/login' ) {
        location.pathname = '/index.php/login';
        return;
      }


      if ( location.pathname == '/index.php/login' ) return; 


      // 配置全局加载数据的进度
          $( document ).ajaxStart(function () {

            // console.log( 'start' );
            nprogress.start();


            // 进度加载
            if ( $( '#itcast_cover' ).length > 0 ) {
              $( '#itcast_cover' ).show();
              return;
            } 

            $( '<div id="itcast_cover"><img src="/assets/images/loading.gif"></div>' )
              .appendTo( 'body' );

          }).ajaxStop(function () {
            // console.log( 'stop' );
            nprogress.done();


            // 隐藏进度条
            $( '#itcast_cover' ).fadeOut();
          });



          // 可以进入到这里表示已经登录成功
          // 页面加载后, 从 cookie 中获得用户名与头像的路径
          var profile = JSON.parse( $.cookie( 'profile' ) || '{}' );

          var html = template( 'profileId', profile );
          $( '.aside .profile' ).html( html );


          

          // 修改菜单的按钮高亮
  // 只需要给对应的页面增加 class="active" 即可
  // console.log( location ); // pathname 可以拿到我们的路径\
  // 对字符串进行处理
  // 如果是短名字, 看短名字的内容
  // index, login, pass, settings 
  // 只有 index 需要高亮, 其他不需要
  // 因此只考虑 index
  // 对字符串处理, 结尾为 index 的就是首页
  // 或者 / 就是首页
  // 或者 /index.php 就是首页


  // 长名字
  // 除了 index 下的页面其他页面都是长名字访问
  // 每一个 a 标签在命名的时候使用的就是长名字中间使用连字符
  // /index.php/teacher/list => teacher-list


/*  var pathname = location.pathname;

  if ( pathname == '/' || 
    pathname == '/index.php' || 
    pathname.split( '/' )[ pathname.split( '/' ).length - 1 ] == 'index' ) {
   $( '.index' ).addClass( 'active' );
  } else {

   // 其他页面的长名字情况
   // 1> 将开始的 / 去掉
   pathname = pathname.slice( 1 );
   // 2> 找到第一个 / 的索引
   var index = pathname.indexOf( '/' );
   // 3> 从第一个 / 开始截取 后面的所有内容
   pathname = pathname.slice( index + 1 );
   // 4> 将 / 转换成 - 
   pathname = pathname.replace( '/', '-' );

   // console.log( pathname );

   $( '.' + pathname ).addClass( 'active' );
 
  }*/

  // 正则算法
  var pathname = location.pathname;

  var r1 = /^\/$|php$|index$/;
  var r2 = /\/([^/]+\/[^/]+)$/;
  if ( r1.test( pathname ) ) {
    $( '.index' ).addClass( 'active' );
  } else {
    // console.log( r2.exec( pathname )[ 1 ].replace( '/', '-' ) );

    $( '.' + r2.exec( pathname )[ 1 ].replace( '/', '-' ) ).addClass ( 'active' );
  }

      





});