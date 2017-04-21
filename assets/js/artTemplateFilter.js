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

    template.defaults.imports.gender = function ( gender ) {
        return gender == 0 ? '男' : '女'; 
    };

    template.defaults.imports.checkAvatar = function ( avatar ) {
        return avatar || '/assets/images/default.png';
    };
});