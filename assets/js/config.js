require.config({

  baseUrl: '/',

  paths:{
    //第三方
    jquery: 'node_modules/jquery/dist/jquery',
    template: 'node_modules/art-template/lib/template-web',
    cookie: 'node_modules/jquery.cookie/jquery.cookie',
    less: 'node_modules/less/dist/less',
    nprogress: 'node_modules/nprogress/nprogress',


    //个人
    common:'assets/js/common',
    login:'assets/js/index/login',
    teacherList:'assets/js/teacher/list'

  }

})

require( [ 'common' , 'less' ] );