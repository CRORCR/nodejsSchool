var arr =[1,2,3,4,5];
var m = ([["name","李长全"],["age",25]]);
var s = new Set(["hello","world"]);

num = function () {
    var n = 123;
    var n2 = 12.3;
    var n3 = -99;
    console.log(n);
    console.log(n);
    console.log(n2);
    console.log(n3);
//提升全局变量
    v = 1;
    console.log(v);
};

forIn = function () {
    var arr = ["1", 2, 3, "hello"];
//for in 拿的是key,也可以变量对象,拿到属性
// for ... in对Array的循环得到的是String而不是Number
    for (var k in arr) {
        console.log(k)
        //hasOwnProperty() 然后可以根据是否自己自有的,不是继承来的
    }
};

arr=function(){
    'use strict';
    let arr = ['小明', '小红', '大军', '阿黄'];
//输出  欢迎XXX，XXX，XXX和XXX同学！
    let arrNew=arr.slice(0,arr.length-1);
    console.log("欢迎"+arrNew+"和"+arr[arr.length-1]+"同学!");
};

// arr.forEach(function (element, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log(element + ', index = ' + index);
// });

//参数分别是:元素,元素,set本身
s.forEach(function (element) {
    console.log(element);
});

//参数分别是 value、key和map本身
m.forEach(function (value) {
    console.log(value);
});


mapTest=function () {
    //map第一种使用
    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    console.log(m.get('Michael'));

//map第二种使用
    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
}
// num();
// forIn();
// arr();