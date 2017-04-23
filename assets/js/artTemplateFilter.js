// 过滤器
// define([ 'template' ], function ( template ) {
    
//     // alert(2);
//     // 计算年龄的函数
//     function getAge( birthdate ) {
//         // 可以知道 birthdate 是一个 格式为 yyyy-MM-dd 的字符串
//         var year = /(\d+)-/.exec( birthdate )[ 1 ] - 0;
//         var curr = new Date().getFullYear();
//         return curr - year;
//     }

   

//     template.defaults.imports.age = getAge;

//     template.defaults.imports.gender = function ( gender ) {
//         return gender == 0 ? '男' : '女';
//     };

//     template.defaults.imports.checkAvatar = function ( avatar ) {
//         return avatar || '/assets/images/default.png';
//     };

//     template.defaults.imports.statusParse = function (tc_status) {
//         return tc_status == 0 ? '启 用' : '注 册';
//     };



// });


// 过滤器
define([ 'template' ], function ( template ) {
    

    // 计算年龄的函数
    function getAge( birthdate ) {
        // 可以知道 birthdate 是一个 格式为 yyyy-MM-dd 的字符串
        var year = /(\d+)-/.exec( birthdate )[ 1 ] - 0;
        var curr = new Date().getFullYear();
        return curr - year;
    }

   

    template.defaults.imports.age = getAge;
    // console.log(2);

    template.defaults.imports.gender = function ( gender ) {
        return gender == 0 ? '男' : '女'; 
    };

    template.defaults.imports.checkAvatar = function ( avatar ) {
        return avatar || '/assets/images/default.png';
    };

    // 创建一个过滤器, 根据传入的 tc_status 来确定显示的是注 销还是启用
    // 用在 teacher list 页面, 用于 ...
    template.defaults.imports.statusParse = function ( tc_status ) {
        return tc_status == 0 ? '启 用' : '注 销';
    };

    





});