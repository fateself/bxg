/*
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});*/
  console.log(1);
  if ( !$.cookie('PHPSESSID') && location.pathname != "/index.php/login" ) {
    console.log(1);
    location.pathname = "/index.php/login";
  }

  // 页面加载的时候 从 cookie 中取出用户信息, 加载 图片与名字
  var profile = JSON.parse( $.cookie( 'profile' ) );

  // console.log( template );
  var html = template( 'profileId', profile );
  $( '.aside .profile' ).html( html );