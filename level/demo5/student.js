var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

//__proto__ 父类   js中的继承只能单继承,proto指向谁,谁就是爹
// js运行时期,你可以把xiaoming从Student变成Bird,或者变成任何对象
xiaoming.__proto__ = Student;
xiaoming.run();


//************
// Object.create()方法可以传入一个原型对象,并创建一个基于该原型的新对象,
// 但是新对象什么属性都没有,因此,我们可以编写一个函数来创建
/ 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true