abstract class Hewan2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makan(): void {
        console.log('Semua hewan pasti makan');
    }

    abstract bergerak(): void;
}

class Kucing2 extends Hewan2{
    constructor() {
        super('Kucing');
    }

    bergerak(): void {
        console.log('Kucing berjalan');
    }
}

class Burung2 extends Hewan2 {
    constructor() {
        super('Burung');
    }

    bergerak(): void {
        console.log('Burung terbang');
    }
}

const kucing2 = new Kucing2();
kucing2.bergerak();

const burung2 = new Burung2();
burung2.bergerak();