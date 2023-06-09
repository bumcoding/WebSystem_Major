// OrderSystem 생성자 함수
function OrderSystem() {
    this.orders = [];
}
// OrderSystem 메소드
OrderSystem.prototype.takeOrder = function(order) {
    this.orders.push(order);
};
// CoffeeOrderSystem 생성자 함수
function CoffeeOrderSystem() {
    OrderSystem.call(this);
}
// CoffeeOrderSystem이 OrderSystem을 상속
CoffeeOrderSystem.prototype = Object.create(OrderSystem.prototype);
// CoffeeOrderSystem 메소드 오버라이딩
CoffeeOrderSystem.prototype.takeOrder = function(coffeeOrder) {
    console.log(`Order received: ${coffeeOrder.coffeeType}`);
    OrderSystem.prototype.takeOrder.call(this, coffeeOrder);
};
// CoffeeOrder 생성자 함수
function CoffeeOrder(coffeeType) {
    this.coffeeType = coffeeType;
}
// AmericanoOrder 생성자 함수
function AmericanoOrder() {
    CoffeeOrder.call(this, "아메리카노");
}
// AmericanoOrder가 CoffeeOrder를 상속
AmericanoOrder.prototype = Object.create(CoffeeOrder.prototype);
// LatteOrder 생성자 함수
function LatteOrder() {
    CoffeeOrder.call(this, "라떼");
}
// LatteOrder가 CoffeeOrder를 상속
LatteOrder.prototype = Object.create(CoffeeOrder.prototype);

var coffeeOrderSystem = new CoffeeOrderSystem();
var americanoOrder = new AmericanoOrder();
var latteOrder = new LatteOrder();

coffeeOrderSystem.takeOrder(americanoOrder);
coffeeOrderSystem.takeOrder(latteOrder);

console.log(coffeeOrderSystem.orders);