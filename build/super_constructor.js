"use strict";
class Employee {
    constructor(name, division) {
        this.name = name;
        this.division = division;
    }
}
class Manager extends Employee {
    constructor(name, division, fee) {
        super(name, division);
        this.fee = fee;
    }
}
let irwanto = new Manager('Irwanto', 'Keuangan', 20000000);
console.log(irwanto);
