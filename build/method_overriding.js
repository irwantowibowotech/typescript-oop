"use strict";
class Animal {
    constructor() {
        this.name = '';
    }
    berjalan() {
        console.log('Sedang bernafas!!');
    }
}
class Kodok extends Animal {
    berjalan() {
        console.log('Kodok lagi bernafas!!');
    }
}
let bencok = new Kodok();
bencok.berjalan();
