class Person {
    name: string;
    protected address: string;
    private isMarriage: boolean;

    constructor(name: string, address: string, isMarriage: boolean) {
        this.name = name;
        this.address = address;
        this.isMarriage = isMarriage;
    }

    walking(): void {
        console.log(`${this.name} sedang berjalan jalan`);
    }
}

class IronMan extends Person {
    private custom: string = "Zirah Baja";
    private weapon: string = "Laser";
    private isLeader: boolean = true;

    getHero(): void {
        console.log(`${this.custom} ${this.weapon} ${this.isLeader}`);
        console.log(`${this.address}`);
        // console.log(`${this.isMarriage}`) // error private modifier
    }
}

let hero1 = new IronMan("Iron Man", "Gunungkidul", true);
hero1.getHero();
hero1.walking();
// hero1.custom; // error private modifier