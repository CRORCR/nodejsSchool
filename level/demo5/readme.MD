obj.xxx访问一个对象的属性时，js引擎先在当前对象上查找该属性，如果没有找到
就到其原型对象上找，如果还没有，就一直上溯到Object.prototype如果还没有就返回undefined。

子类可以使用父类的属性

