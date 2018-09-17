//切分字符串
str=function () {
    'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
    'a b   c'.split(/\s+/); // ['a', 'b', 'c']
    'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
    'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
};

str();