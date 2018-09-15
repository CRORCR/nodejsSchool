//面向对象
// typeof操作符获取对象的类型，它总是返回一个字符串

types=function () {
    typeof 123; // 'number'
    typeof NaN; // 'number'
    typeof 'str'; // 'string'
    typeof true; // 'boolean'
    typeof undefined; // 'undefined'
    typeof Math.abs; // 'function'
    typeof null; // 'object'
    typeof []; // 'object'
    typeof {}; // 'object'
};
types();