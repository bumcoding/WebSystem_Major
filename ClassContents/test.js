// var v1 = 1;
// var v2 = v1;
// var o1 = { k : 2 }
// var o2 = o1;
// var v3 = o1.k;

// v1 = 3;
// o1.k = 4;

// console.log(v1 + v2 + v3 + o1.k + o2.k); // 3+1+2+4+4 = 14

// var outer = function() {
//     var inner = function() {
//         console.log(a);
//         var a = 2;
//     }

//     function inner() {
//         var a = 3;
//         console.log(a + b);
//         var b = 4;
//     }

//     return inner;
// }

// outer()();

// var func = function() {
//     return this;
// }

// var obj = {
//     method1: func,
//     method2:() => func(),
//     method3:() => this
// }

// console.log(func() == global);
// console.log(obj.method1() == global);
// console.log(obj.method2() == global);
// console.log(obj.method3() == global);

// console.log([1, 2, 3, 4].filter(i => i % 2 != 1).reduce((acc, n) => acc * n));

// (function (R = 0) {
//     const arr = [1, 2, 3, 4, 5];

//     for (var i = 0; i < arr.length; i+= 2)
//         setTimeout(() => R += 1, 1000);
    
//     setTimeout(() => console.log(R), 1000);
// })();

// var arr1 = [];
// arr1.length = 3;
// console.log(arr1); // [...]

// var arr2 = new Array(3);
// console.log(arr2); // [...]

// var arr3 = [undefined, undefined, undefined];
// console.log(arr3); // 위와 동일

// var n = null;
// console.log(typeof n); // object

// console.log(n == undefined); // t
// console.log(n == null); // t
// console.log(n === undefined); // f
// console.log(n === null); // t

// var arr1 = [undefined, 1];
// var arr2 = [];
// arr2[1] = 1;

// arr1.forEach(function (v, i) { console.log(v, i); }); // undefined 0 / 1 1
// arr2.forEach(function (v, i) { console.log(v, i); }); // 1 1

// arr1.map(function (v, i) { return v + i; }); // Nan 2
// arr2.map(function (v, i) { return v + i; }); // 2

// arr1.filter(function (v) { return !v; }); // [undefined]
// arr2.filter(function (v) { return !v; }); // []

// // acc -> 배열 cur -> 해당 값  idx -> 배열의 인덱스 번호
// arr1.reduce(function (acc, v, i) { return acc + v + i; }, ''); // undefined011
// arr2.reduce(function (acc, v, i) { return acc + v + i; }, ''); // 11

// var func = function() {
//     return this;
// }

// var obj = {
//     method1: func,
//     method2:() => func(),
//     method3:() => this
// }

// console.log(func() == global);
// console.log(obj.method1() == global);
// console.log(obj.method2() == global);
// console.log(obj.method3() == global);

// var outer = (function () {
//     var a = 1;
//     var inner = function () {
//         return ++a;
//     };
//     return inner;
// })();

// console.log(outer()); // 2
// console.log(outer()); // 3
// outer = null;

// (function() {
//     var a = 0;
//     var intervalId = null;
//     var inner = function() {
//         if (a++ >= 10) {
//             clearInterval(intervalId);
//             inner = null;
//         }
//         console.log(a); // 1 부터 10까지 출력됨
//     };
//     intervalId = setInterval(inner, 1000);
// })();


// function outer() {
//     var a = 0;

//     return () => {
//         return ++a;
//     };
// }

// var f1 = outer();
// var f2 = outer();

// console.log(f1()); // 1
// console.log(f1()); // 2
// console.log(f2()); // 1
// console.log(f2()); // 2

// var func = function (a, b, c, d) {
//     console.log(this, a, b, c, d);
//     };
//     var bindFunc = func.bind({ x: 'bindFunc' }, 4, 5);
//     console.log (func.name);
//     console.log (bindFunc.name);

function outer() {
    var a = 0;

    return () => {
        return ++a;
    };
}

var f1 = outer();
var f2 = outer();

console.log(f1());
console.log(f1());
console.log(f2());
console.log(f2());