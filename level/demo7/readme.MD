document对象表示当前页面 常用的两个函数 getElementById()和getElementsByTagName()
document对象还有一个cookie属性，可以获取当前页面的Cookie
DOM是一个树形结构

操作DOM对象,最常用的方法
document.getElementById()   id在一个页面是唯一的,这种方式比较常用
document.getElementsByTagName()   返回array
document.getElementsByClassName()  返回array

// 第一种: 返回ID为'test'的节点：
var test = document.getElementById('test');
var cs = test.children;   // 获取节点test下的子节点
var first = test.firstElementChild;   //获得test下第一个节点
var last = test.lastElementChild;     //获得test下的最后一个节点

//第二种:返回id内部的target：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');


更新DOM

插入DOM

删除DOM
