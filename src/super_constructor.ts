class Employee {
    name: string;
    division: string;

    constructor(name: string, division: string) {
        this.name = name;
        this.division = division;
    }
}

class Manager extends Employee{
    fee: number;

    constructor(name: string, division: string, fee: number) {
        super(name, division)
        this.fee = fee;
    }
}

let irwanto = new Manager('Irwanto', 'Keuangan', 20000000);
console.log(irwanto);