define( ['jquery' , 'template' , 'bootstrap' , 'filter' ], function ( $ , template) {
  


  //获得讲师列表数据
  $.ajax( {
    url: '/api/teacher',
    type: 'get',
    success: function (info) {
      if (info.code == 200 ) {
        //加载数据的代码写在这
        // 1.加载模板和数据，渲染模板，生成html格式的字符串
        var html = template( 'teacherListTrTpl',{ list:info.result } );

        console.log(info);
        // 2 . 加到页面中
        $( '#teacherList tbody' ).html( html );

      }
    },
    error:function (error) {
      console.log(error);
    }



  } )


    // 添加查看讲师按钮的点击事件
    // $( '.teacherInfoShow' ).click(function () {
    //     alert( 1 );
    // });
    // 使用委托
    $( '#teacherList' ).on( 'click', '.teacherInfoShow', function () {
         // alert( this.innerHTML );

         // alert( $(this).attr( 'data-teacher-id' ) );


         var teacherId = $(this).attr( 'data-teacher-id' );

         $.ajax({
             url: '/api/teacher/view',
             type: 'get',
             data: 'tc_id='+teacherId,
             success: function ( info ) {
                 if ( info.code == 200 ) {
                     // 拼接模板, 加载数据
                     // 显示到页面中
                    //  console.log( info.result );
                    info.result.tc_hometown = info.result.tc_hometown.split('|').join( ' ' );

                    info.result.tc_introduce = '<p>前端工程师的职责是制作标准优化的代码，并增加交互动态功能，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>\n\n<p>前端工程师属于IT技术职业的一种，是近5年发展起来的职业，旧的体系将其定义为Web前端工程师，主要的技术包含：HTML、JavaScript、CSS。但IT技术属于变化比较快的领域，最近发生了很大的变革，新的体系下，前端工程师技术又增加了：nodejs、Hybrid App。</p>\n';

                    var html = template( 'teacherInfoTpl', info.result );
                    $( '#teacherModal .panel-body' ).html( html );

                    $( '#teacherModal' ).modal();
                 }
             } 
         })
         // 显示模态框
         // $( '#teacherModal' ).modal();

         return false;
    });
  
  
});