/*
Facade pattern
복잡한 내부 로직을 감추고, 외관을 아름답게!
 */

const Camera6 = (function() {
    function Camera() {}

    Camera.prototype.on = function() {
        console.log("Turn on the camera.");
    }

    Camera.prototype.off = function() {
        console.log("Turn off the camera.");
    }

    Camera.prototype.track_object = function() {
        console.log("Track a object.");
    }

    return Camera;
})();

const Missile6 = (function() {
    function Missile() {}

    Missile.prototype.mount_missile = function() {
        console.log("Mount a missile.");
    }

    Missile.prototype.aim_target = function() {
        console.log("Aim at a target.");
    }

    Missile.prototype.fire_missile = function() {
        console.log("Fire a missile.");
    }

    return Missile;
})();

const Robot6 = (function() {
    function Robot() {}

    Robot.prototype.camera = new Camera6();
    Robot.prototype.missile = new Missile6();

    Robot.prototype.attack_missile = function() {
        this.camera.on();
        this.camera.track_object();
        this.missile.mount_missile();
        this.missile.aim_target();
        this.missile.fire_missile();
        this.camera.off();
    }

    Robot.prototype.attack_bomb = function() {
    }

    return Robot;
})();

const wbot6 = new Robot6();
wbot6.attack_missile();


console.log("\n----------\n");


// class

class Camera7 {
    on() {
        console.log("Turn on the camera.");
    }

    off() {
        console.log("Turn off the camera.");
    }

    track_object() {
        console.log("Track a object.");
    }
};

class Missile7 {
    mount_missile() {
        console.log("Mount a missile.");
    }

    aim_target() {
        console.log("Aim at a target.");
    }

    fire_missile() {
        console.log("Fire a missile.");
    }
};

class Robot7 {
    constructor() {
        this.camera = new Camera7();
        this.missile = new Missile7();
    }

    attack_missile() {
        this.camera.on();
        this.camera.track_object();
        this.missile.mount_missile();
        this.missile.aim_target();
        this.missile.fire_missile();
        this.camera.off();
    }

    attack_bomb() {
    }
};

const wbot7 = new Robot7();
wbot7.attack_missile();

console.log("\n----------\n");


module.exports = {
    Robot6,
    Robot7
};
