// var v1 = 1;
// var v2 = v1;
// var o1 = { k : 2 }
// var o2 = o1;
// var v3 = o1;

// v1 = 3;
// o1.k = 4;

// console.log(v1 + v2 + v3.k + o1.k + o2.k); // 3+1+2+4+4 = 14

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

// var a = 1;
// var b = 1;

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

// (function (R = 0) {
//     const arr = [1, 2, 3, 4, 5];

//     for (var i = 0; i < arr.length; i+= 2)
//         setTimeout(() => R += 1, 1000);
    
//     setTimeout(() => console.log(R), 1000); // i가 세번 더해진값
// })();

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
//         if (++a >= 10) {
//             clearInterval(intervalId);
//             inner = null;
//         }
//         console.log(a); // 1 부터 10까지 출력됨
//     };
//     intervalId = setInterval(inner, 1000);
// })();

var partial = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));

var dog = {
    name: '강아지',
    greet: partial(function (prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈, '),
};

console.log(dog.greet('입니다!'));

var _= Symbol.for('EMPTY_SPACE;')

var partial = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        for (var i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === _) {
                partialArgs[i] = restArgs.shift();
            }
        }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var addPartial = partial(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));

var dog = {
    name: '강아지',
    greet: partial(function (prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈, '),
};

console.log(dog.greet('입니다!'));