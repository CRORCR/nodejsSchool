let arr =[1,2,3,4,5];
let m = ([["name","李长全"],["age",25]]);
let s = new Set(["hello","world"]);

//获得元素
for(let k of arr){
    console.log(k)
}
console.log("********************");
//获得下标
for(let k in arr){
    console.log(k)
}

console.log("********************");
for(let k of m){
    console.log("map",k);
}

for(let k of s){
    console.log("set",k);
}