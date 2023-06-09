/*
Strategy pattern
때에 맞는 전략(알고리즘)을 시행하라!
*/

const Weapon6 = (function () {
    function Weapon() {
        this.weapon = null;
    }

    Weapon.prototype.setWeapon = function(weapon) {
        this.weapon = weapon;
    };

    Weapon.prototype.fire = function() {
        this.weapon.fire();
    };

    return Weapon;
})();

const Missile6 = (function () {
    function Missile() {}

    Missile.prototype.fire = function() {
        console.log('Fire a missile.');
    };

    return Missile;
})();

const Bomb6 = (function () {
    function Bomb() {}

    Bomb.prototype.fire = function () {
        console.log('Fire a bomb.');
    };

    return Bomb;
})();

const weapon6 = new Weapon6();
weapon6.setWeapon(new Missile6());
weapon6.fire();
weapon6.setWeapon(new Bomb6());
weapon6.fire();

console.log("\n----------\n");


class Weapon7 {
    setWeapon(weapon) {
        this.weapon = weapon;
    };

    fire() {
        this.weapon.fire();
    };
};

class Missile7 {
    fire() {
        console.log('Fire a missile.');
    };
};

class Bomb7 {
    fire() {
        console.log('Fire a bomb.');
    };
};

const weapon7 = new Weapon7();
weapon7.setWeapon(new Missile7());
weapon7.fire();
weapon7.setWeapon(new Bomb7());
weapon7.fire();
