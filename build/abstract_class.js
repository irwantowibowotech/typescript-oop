"use strict";
class Hewan2 {
    constructor(name) {
        this.name = name;
    }
    makan() {
        console.log('Semua hewan pasti makan');
    }
}
class Kucing2 extends Hewan2 {
    constructor() {
        super('Kucing');
    }
    bergerak() {
        console.log('Kucing berjalan');
    }
}
class Burung2 extends Hewan2 {
    constructor() {
        super('Burung');
    }
    bergerak() {
        console.log('Burung terbang');
    }
}
const kucing2 = new Kucing2();
kucing2.bergerak();
const burung2 = new Burung2();
burung2.bergerak();
