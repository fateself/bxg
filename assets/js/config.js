require.config({

  baseUrl: '/',

  paths:{
    //第三方
    jquery: 'node_modules/jquery/dist/jquery',
    template: 'node_modules/art-template/lib/template-web',
    cookie: 'node_modules/jquery.cookie/jquery.cookie',
    less: 'node_modules/less/dist/less',
    nprogress: 'node_modules/nprogress/nprogress',
    bootstrap: 'node_modules/bootstrap/dist/js/bootstrap',
    validate: 'node_modules/jquery-validation/dist/jquery.validate',
    datepicker:'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker',
    zhCN:'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min',
    form:'node_modules/jquery-form/dist/jquery.form.min',



    //个人
    common:'assets/js/common',
    login:'assets/js/index/login',
    teacherList:'assets/js/teacher/list',
    filter: 'assets/js/artTemplateFilter',
    header: 'assets/js/common/header',
    teacherAdd: 'assets/js/teacher/add'


  },

  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    validate: {
      deps: ['jquery']
    },
    datepicker: {
      deps: [ 'jquery' ]
    },
    zhCN:{
      deps: ['datepicker']
    }
  }

})

require( [ 'common' , 'less', 'header' ] );