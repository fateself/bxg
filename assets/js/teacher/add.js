define( [ 'jquery', 'validate', 'datepicker', 'zhCN', 'form' ], function ( $ ) {
    

    // 用于提交验证
    $( '#teacherForm' ).validate({
        description: {
            tc_name: {
                required: '用户名必须填写'
            },
            tc_pass: {
                required: '密码必须填写'
            },
            tc_join_date: {
                required: '入职日期必须填写',
                pattern: '入职日期格式不正确'
            }
        }
    });












    // 1, 判断 url 确定是 新增还是修改, 如果是新增, 那么不需要请求数据
    // 如果是修改, 拿到 tc_id 后要请求数据, 并放入 对应的文本框中
    // var pathName = location.href; 
    // 我们已知在设计的时候只有 一个参数就是 tc_id
    // var params = pathName.slice( pathName.indexOf( '?' ) + 1 );

    // console.log( location.search );

    var params = location.search && location.search.slice( 1 );

    if ( !params ) {
        // alert( '没有数据, 是新增讲师' );
        addTeacher();
    } else {
        // alert( '有数据是, 修改讲师' );
        modifidTeacher( params );
    }


    // 封装函数功能( 模块 )
    function addTeacher() {
        // 1, 面包屑导航需要调整
        $( '.breadcrumb .active' ).html( '讲师添加' );
        $( '#teacherForm :submit' ).val( '添加' );
        // 2, 验证用户输入
        // 3, 输入时间
        // 4, 提交保存
        $( '#teacherForm' ).submit(function () {

            // ajax
            $(this).ajaxSubmit({
                // 这个方法与 jq 中的 ajax 方法一样的使用, 只是不用自己提供参数
                url: '/api/teacher/add',
                type: 'post',
                success: function ( info ) {
                    console.log( info );
                }
            });

            return false;
        });




    }

    function modifidTeacher( params ) {
        $( '.breadcrumb .active' ).html( '讲师修改' );
        $( '#teacherForm :submit' ).val( '修改' );


        // 最后使用模板的时候 是使用 html 方法覆盖原有的内容
    }








});