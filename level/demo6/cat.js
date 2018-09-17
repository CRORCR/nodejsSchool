class Cat{
    constructor(name){
        this.name=name
    }
    hello(){
        console.log(this.name,"say hello");
    }
}

var cat = new Cat("lcq");
cat.hello();

//继承
class helloCat extends Cat{
    constructor(age,name){
        super(name);//super 调用父类构造,否则父类不能初始化
        this.age=age;
    }
    sayHello(){
        console.log(this.name,this.age,"say hello")
    }
}
var hello = new helloCat(25,"lcq");
hello.sayHello();