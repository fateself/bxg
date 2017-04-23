define( [ 'jquery' ], function($) {
  // alert(1);
  
  $( '#logout' ).click( function() {
    $.ajax({
      url: '/api/logout',
      type: 'post',
      success: function (info) {
        if ( info.code == 200 ) {
          alert( '退出成功' );
          location.pathname = '/index.php/login';
        }
      }
    })
  })

} )