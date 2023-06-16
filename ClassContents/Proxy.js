/*
Proxy pattern
대리자 패턴: 내 일을 대신해줘!!!
 */

const Facade = require("./Facade");

const Robot6Proxy = (function () {
    function Robot6Proxy() {
        this.wbot6 = new Facade.Robot6();
    }

    Robot6Proxy.prototype.attack_missile = function () {
        this.wbot6.attack_missile();
    }

    return Robot6Proxy;
})();


const wbot6 = new Robot6Proxy();
wbot6.attack_missile();


console.log("\n----------\n");


class Robot7Proxy {
    constructor() {
        this.wbot7 = new Facade.Robot7();
    }

    attack_missile() {
        this.wbot7.attack_missile();
    }
};


const wbot7 = new Robot7Proxy();
wbot7.attack_missile();


/*
    Proxy 객체
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy

    Proxy 객체를 사용하면 한 객체에 대한 기본 작업을 가로채고 재정의하는 프록시를 만들 수 있습니다.

    const proxy = new Proxy(target, handler);
    - target    : 프록시할 원본 객체
    - handler   : 가로채는 작업과 가로채는 작업을 재정의하는 방법을 정의하는 객체

    Handler                     동작 시점
    get	                        프로퍼티를 읽을 때
    set	                        프로퍼티에 값을 쓸 때
    has	                        in 연산자가 호출될 때
    deleteProperty	            delete 연산자가 호출될 때
    apply	                    함수가 호출될 때
    constructor	                new 연산자가 호출될 때
    getPrototypeOf	            Object.getPrototypeOf
    setPrototypeOf	            Object.setPrototypeOf
    isExtensible	            Object.isExtensible
    preventExtensions	        Object.preventExtensions
    getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor
    ownKeys	                    Object.getOwnPropertyNames
    ownKeys                     Object.getOwnPropertySymbols
*/

const target1 = {
    message1: "hello",
    message2: "everyone"
};

const handler1 = {
    get(target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }

        return Reflect.get(...arguments);
    },
};

const proxy1 = new Proxy(target1, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);

console.log("\n----------\n");


const handler2 = {
    get(obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    }
};

const proxy2 = new Proxy({}, handler2);
proxy2.a = 1;
proxy2.b = undefined;

console.log(proxy2.a, proxy2.b);
console.log('c' in proxy2, proxy2.c);

console.log("\n----------\n");


// 유효성 검사

const validator = {
    set(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value))
                throw new TypeError('The age is not an integer.');
            if (value > 200)
                throw new RangeError('The age seems invalid.');
        }

        obj[prop] = value;
        return true;
    }
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age);

person.age = 'young';   // 예외 발생
person.age = 300;       // 예외 발생
