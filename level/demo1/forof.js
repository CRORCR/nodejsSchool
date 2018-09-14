var arr =[1,2,3,4,5];
var m = ([["name","李长全"],["age",25]]);
var s = new Set(["hello","world"]);

//获得元素
for(var k of arr){
    console.log(k)
}
console.log("********************");
//获得下标
for(var k in arr){
    console.log(k)
}

console.log("********************");
for(var k of m){
    console.log("map",k);
}

for(var k of s){
    console.log("set",k);
}