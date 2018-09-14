var arr =["1",2,3,"hello"];
//for in 拿的是key,也可以变量对象,拿到属性
// for ... in对Array的循环得到的是String而不是Number
for (var k in arr){
    console.log(k)
    //hasOwnProperty() 然后可以根据是否自己自有的,不是继承来的
}