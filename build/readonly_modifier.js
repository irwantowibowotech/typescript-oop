"use strict";
class Mantab {
    constructor() {
        this.isActive = true;
    }
}
const employee = new Mantab();
console.log(employee.isActive); // true
// employee.isActive = false; // error readonly
