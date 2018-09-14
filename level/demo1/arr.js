'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];
//输出  欢迎XXX，XXX，XXX和XXX同学！
var arrNew=arr.slice(0,arr.length-1)
console.log("欢迎"+arrNew+"和"+arr[arr.length-1]+"同学!")