Array.prototype.forEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++)
        callback.call(thisArg || global, this[i], i, this);
};

Array.prototype.filter = function (callback, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++)
        if (callback.call(thisArg || global, this[i], i, this))
            result.push(this[i]);
    return result;
};

Array.prototype.some = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++)
        if (callback.call(thisArg || global, this[i], i, this))
            return true;
    return false;
};

Array.prototype.every = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++)
        if (!callback.call(thisArg || global, this[i], i, this))
            return false;
    return true;
};

Array.prototype.find = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++)
        if (callback.call(thisArg || global, this[i], i, this))
            return this[i];
};

Array.prototype.findIndex = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++)
        if (callback.call(thisArg || global, this[i], i, this))
            return i;
    return -1;
};

Array.prototype.map = function (callback, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++)
        if (this[i]) result[i] = callback.call(thisArg || global, this[i], i, this);
    return result;
};

Array.prototype.flatMap = function (callback, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        v = callback.call(thisArg || global, this[i], i, this);
        if (!Array.isArray(v)) v = [v]
        result.push(...v.filter(v => !Number.isNaN(v)))
    }
    return result;
};

Array.from = function (arrLike, mapFn, thisArg) {
    let result = [];
    const fn = (v, i) => result.push(mapFn ? mapFn.call(thisArg || global, v, i) : v);
    if (arrLike.length) {
        for (let i = 0; i < arrLike.length; ++i) fn(arrLike[i], i);
    } else if (arrLike.size) {
        let i = 0;
        for (const v of arrLike) fn(v, i++);
    }
    return result;
};

Set.prototype.forEach = function (callback, thisArg) {
    for (const v of this)
        callback.call(thisArg || global, v, v, this);
};

Map.prototype.forEach = function (callback, thisArg) {
    for (const v of this)
        callback.call(thisArg || global, v[1], v[0], this);
};


const arr = [1, 3, 5, 7, 9];

let r = 0;
arr.forEach(v => r += v);
console.log('Array.prototype.forEach:', r);

console.log('Array.prototype.filter:', arr.filter(v => v % 3 == 0));
console.log('Array.prototype.filter:', arr.filter(v => v % 2 == 1));

console.log('Array.prototype.some:', arr.some(v => v % 3 == 0));
console.log('Array.prototype.some:', arr.some(v => v % 2 == 0));

console.log('Array.prototype.every:', arr.every(v => v % 3 == 0));
console.log('Array.prototype.every:', arr.every(v => v % 2 == 1));

console.log('Array.prototype.find:', arr.find(v => v % 3 == 0));
console.log('Array.prototype.find:', arr.find(v => v % 2 == 1));

console.log('Array.prototype.findIndex:', arr.findIndex(v => v % 3 == 0));
console.log('Array.prototype.findIndex:', arr.findIndex(v => v % 2 == 1));

console.log('Array.prototype.map:', arr.map(v => v % 3 == 0));
console.log('Array.prototype.map:', arr.map(v => v % 2 == 1));

console.log('Array.prototype.flatMap:', arr.flatMap(v => v % 3 == 0));
console.log('Array.prototype.flatMap:', arr.flatMap(v => [v % 3 == 0]));


const data = [5, 4, -3, 20, 17, , -33, -4, 18];
console.log('Array.prototype.map:', data.map(v => v * 2));
console.log('Array.prototype.flatMap:', data.flatMap(v => v * 2));
console.log('Array.prototype.flatMap:', data.flatMap(v => [v * 2]));


const str = 'abc';
const arrLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const s = new Set(['a', 'b', 'c']);
const m = new Map([['x1', 'a'], ['x2', 'b'], ['x3', 'c']]);

console.log('Array.from (String):', Array.from(str));
console.log('Array.from (ArrayLike):', Array.from(arrLike));
console.log('Array.from (Set):', Array.from(s));
console.log('Array.from (Map):', Array.from(m)[0]);

const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
console.log('Array.from (Range):', range(0, 10, 2));

r = '';
s.forEach(v => r += v.toUpperCase())
console.log('Set.prototype.forEach:', r);

r = '';
m.forEach((v, k) => r += `${k}${v}`);
console.log('Map.prototype.forEach:', r);
