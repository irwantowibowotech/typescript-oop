class Mantab {
    readonly isActive: boolean = true;
}

const employee = new Mantab();
console.log(employee.isActive) // true
// employee.isActive = false; // error readonly