function pow(x) {
    return x * 2;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let v=arr.map(pow);
console.log(v);

let str= arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(str);

//其实高阶函数也可以用一个for循环去处理,但是如果用到string,这种基本类型,就比较简单了,一行代码搞定
//用不用,随意

let c = ['adam', 'LISA', 'barT'];
// 输出:['Adam', 'Lisa', 'Bart']
// c.map(toUpdate)


//filter过滤
var arr2 = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr2.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r);

// filter
f=function () {
    let arr = ['A', 'B', 'C'];
    let r2 = arr.filter(function (element, index, self) {
        console.log(element); // 依次打印'A', 'B', 'C'
        console.log(index); // 依次打印0, 1, 2
        console.log(self); // self就是变量arr
        return true;
    });
};
// f();

//js里面的sort真是傻逼,10<2?
/*sor=function () {
  let arr =  [10, 20, 1, 2];
    arr.sort();
    console.log(arr);//[ 1, 10, 2, 20 ]
};*/

//如果用sort的话,最后自己重写,反正sort是一个高阶函数
sor=function () {
    let arr =  [10, 20, 1, 2];
    arr.sort(function (x,y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    console.log(arr);//[ 1, 10, 2, 20 ]
};
sor();


//求和
sum=function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
};

console.log(sum([1, 2, 3, 4, 5])); // 15