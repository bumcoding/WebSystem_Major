/*
Observer pattern
상태의 변화를 통지해라!
*/

const Robot6 = (function () {
    function Robot() {
        this.observers = [];
        this.numbers = 2;
    }

    Robot.prototype.attach = function(observer) {
        this.observers.push(observer);
    }

    Robot.prototype.detach = function(observer) {
        this.observers = this.observers.filter(e => e !== observer);
    }

    Robot.prototype.notify = function() {
        this.observers.forEach(e => e.update())
    }

    Robot.prototype.load = function() {
        console.log('Load a missile.')
        this.numbers = 2;
    }

    Robot.prototype.fire = function() {
        console.log('Fire a missile.');
        this.numbers -= 1;
        if (this.numbers === 0) this.notify();
    };

    return Robot;
})();

const User6 = (function () {
    function User() {}

    User.prototype.setRobot = function(robot) {
        this.robot = robot;
        this.robot.attach(this);
    }

    User.prototype.update = function() {
        this.robot.load();
    }

    return User;
})();

const robot6 = new Robot6();
const user6 = new User6();
user6.setRobot(robot6);
robot6.fire();
robot6.fire();

console.log("\n----------\n");


class Robot7 {
    constructor() {
        this.observers = [];
        this.numbers = 2;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(e => e !== observer);
    }

    notify() {
        this.observers.forEach(e => e.update())
    }

    load() {
        console.log('Load a missile.')
        this.numbers = 2;
    }

    fire () {
        console.log('Fire a missile.');
        this.numbers -= 1;
        if (this.numbers === 0) this.notify();
    };
};

class User7 {
    setRobot(robot) {
        this.robot = robot;
        this.robot.attach(this);
    }

    update() {
        this.robot.load();
    }
};

const robot7 = new Robot7();
const user7 = new User7();
user7.setRobot(robot7);
robot7.fire();
robot7.fire();
