js没有浮点型,统一使用number类型
浮点数在运算的时候,会有精度问题,所以 1/3 ===(1-2/3) false
处理这类问题,使用绝对值,自己控制精度 Math.abs(1/3 - (1-2/3))<0.0001 true
JavaScript的数组可以包括任意数据类型 [1, 3.14, 'Hello', null, true];
JavaScript的对象是一组由键-值组成的无序集合 对象的键都是字符串类型，值可以是任意数据类型
访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null,
     'middle-school': 'No.1 Middle School'  //最后一行不加, 如果特殊字符,需要加''
};
对象也可以删除属性
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
判断属性是否存在 'name' in xiaoming; // true 可能是继承来的
xiaoming.hasOwnProperty('name'); // true 只能是自己的

JavaScript中，使用等号=对变量进行赋值。
可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，
但是要注意只能用var申明一次

var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串

这种变量本身类型不固定的语言称之为动态语言
静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错(java)

JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。
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
push 末尾添加，pop尾部弹出

unshift和shift
unshift:头部添加 shift头部弹出

sort 排序
var arr = ['B', 'C', 'A'];
arr.sort()
reverse 翻转
arr.reverse()

splice()方法是修改Array的“万能方法”，
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