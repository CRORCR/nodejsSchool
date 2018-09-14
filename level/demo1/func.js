function foo() {
    return { name: 'foo' };
}

console.log(foo()); // { name: 'foo' }

//js中,会把变量声明提升到函数顶部
//下面的代码其实是有问题的,虽然会提升变量,但是不会提升赋值,所以x=hello+undefined
function foo2() {
    let x = 'Hello, ' + y;
    console.log(x);
    let y = 'Bob';
}
console.log(foo2());