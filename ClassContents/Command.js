/*
Command pattern
요청을 캡슐화하라!
*/

const Robot6 = (function () {
    function Robot() {
        this.weaponCommand = null;
    }

    Robot.prototype.setWeaponCommand = function(weaponCommand) {
        this.weaponCommand = weaponCommand;
    };

    Robot.prototype.fire = function() {
        this.weaponCommand.fire();
    };

    return Robot;
})();

const Weapon6 = (function () {
    function Weapon() {
        this.command = null;
    }

    Weapon.prototype.fireMissile = function() {
        console.log('Fire a missile.');
    };

    Weapon.prototype.fireBomb = function () {
        console.log('Fire a bomb.');
    };

    return Weapon;
})();

const MissileCommand6 = (function () {
    function Command() {
        this.weapon = new Weapon6();
    }

    Command.prototype.fire = function() {
        this.weapon.fireMissile();
    };

    return Command;
})();

const BombCommand6 = (function () {
    function Command() {
        this.weapon = new Weapon6();
    }

    Command.prototype.fire = function() {
        this.weapon.fireBomb();
    };

    return Command;
})();

const robot6 = new Robot6();
robot6.setWeaponCommand(new MissileCommand6());
robot6.fire();
robot6.setWeaponCommand(new BombCommand6());
robot6.fire();

console.log("\n----------\n");


class Robot7 {
    setWeaponCommand(weaponCommand) {
        this.weaponCommand = weaponCommand;
    };

    fire() {
        this.weaponCommand.fire();
    };
};

class Weapon7 {
    fireMissile() {
        console.log('Fire a missile.');
    };

    fireBomb() {
        console.log('Fire a bomb.');
    };
};

class MissileCommand7 {
    constructor() {
        this.weapon = new Weapon7();
    }
    
    fire() {
        this.weapon.fireMissile();
    };
};

class BombCommand7 {
    constructor() {
        this.weapon = new Weapon7();
    }

    fire() {
        this.weapon.fireBomb();
    };
};

const robot7 = new Robot7();
robot7.setWeaponCommand(new MissileCommand7());
robot7.fire();
robot7.setWeaponCommand(new BombCommand7());
robot7.fire();
