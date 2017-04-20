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


          

          $.ajax({
            url: '/api/teacher'
          })

      


    })