"use strict";
class Person {
    constructor(name, address, isMarriage) {
        this.name = name;
        this.address = address;
        this.isMarriage = isMarriage;
    }
    walking() {
        console.log(`${this.name} sedang berjalan jalan`);
    }
}
class IronMan extends Person {
    constructor() {
        super(...arguments);
        this.custom = "Zirah Baja";
        this.weapon = "Laser";
        this.isLeader = true;
    }
    getHero() {
        console.log(`${this.custom} ${this.weapon} ${this.isLeader}`);
        console.log(`${this.address}`);
        // console.log(`${this.isMarriage}`) // error private modifier
    }
}
let hero1 = new IronMan("Iron Man", "Gunungkidul", true);
hero1.getHero();
hero1.walking();
// hero1.custom; // error private modifier
