1.js没有浮点型,统一使用number类型
2.浮点数在运算的时候,会有精度问题,所以 1/3 ===(1-2/3) false
处理这类问题,使用绝对值,自己控制精度 Math.abs(1/3 - (1-2/3))<0.0001 true
3.js的数组可以包括任意数据类型 [1, 3.14, 'Hello', null, true];
4.js的对象是一组由键-值组成的无序集合 对象的键都是字符串类型，值可以是任意数据类型
5.访问属性通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null,
    'middle-school': 'No.1 Middle School'  //最后一行不加, 如果特殊字符,需要加''
};

6.对象也可以删除属性
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
7.判断属性是否存在 'name' in xiaoming; // true 可能是继承来的
xiaoming.hasOwnProperty('name'); // true 只能是自己的

8.js中，使用等号=对变量进行赋值
可以把任意数据类型赋值给变量,同一个变量可以反复赋值，而且可以是不同类型的变量，
但是要注意只能用var申明一次

var a = 123; // a的值是整数123
a = 'ABC';   // a变为字符串

这种变量本身类型不固定的语言称之为动态语言
静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错(java)

9.js在设计之初，为了方便初学者学习，并不强制要求用var申明变量
这个设计错误带来了严重的后果：
如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量：
i = 10; // i现在是全局变量

字符串
''和""都表示字符串
如果包含关系,需要使用\转义一下
多行字符串使用反引号``

数组
js数组没有越界一说,超过了角标,就是undefined

slice
数组的切片,如果不传参数,跟copy效果一样

push和pop
push 末尾添加,pop尾部弹出

unshift和shift
unshift:头部添加 shift头部弹出

sort 排序
var arr = ['B', 'C', 'A'];
arr.sort()
reverse 翻转
arr.reverse()

splice()方法是修改Array的万能方法
它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
var arr = ['aa', 'bb', 'cc', 'dd','ee','ff'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['cc', 'dd','ee']
arr; // ['aa', 'bb', 'Google', 'Facebook','ff']
// 只删除,不添加
arr.splice(2, 2); // ['Google', 'Facebook']
// 只添加,不删除
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

concat array连接
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]); //返回的是新的数组
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']

join 数组的连接

map使用
js中的map表示形式类似于二维数组
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
map第二种使用
var m = new Map(); // 空Map
m.set('Adam', 67);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam');

set 无重复的集合
s.add(4); add添加,存储的元素是任意类型的
s.delete(4) delete删除

for ... of循环来遍历


//函数
arguments 也是一个关键字,一般用来判断参数的个数
function foo(x) {
    if (arguments.length === 0) {
        return 0;
    }
    console.log('x =' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

//这种方式获得有点硬编码的意思,一般都是使用rest,就是一个可变参数
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [3, 4, 5]

foo(1);
// 结果
// a = 1
// b = undefined
// Array []

局部作用域
js的变量作用域是函数内部,在for循环等语句块中无法定义具有局部作用域的变量
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}
解决块级作用域,使用let声明变量,let可以申明一个块级作用域的变量
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError
    i += 1;
}

常量的定义 const与let都具有块级作用域

解构赋值
交换两个变量x和y的值
var x=1, y=2;
[x, y] = [y, x]

Node.js是建立在谷歌Chrome的JavaScript引擎(V8引擎)的Web应用程序框架
Node.js = 运行环境+ JavaScript库

方法
this,指向调用者,如果是内置函数,这个this指向外层的函数
但是可以修改this的指向,使用apply,函数直接可以调用
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

apply是把参数按照数组的形式传入,还有一个函数call,是把参数按照可变参数逐个添加
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5

高阶函数
高阶函数就是把函数作为参数传递和使用
function add(x, y, f) {
    return f(x) + f(y);
}

map/reduce
filter

箭头函数
x => x * x
相当于如下函数:
function (x) {
    return x * x;
}

包装类型
使用new创建,类型会变为object,与原来的类型已经不相等了
/*
var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');
*/
尽量不使用包装对象！尤其是针对string类型