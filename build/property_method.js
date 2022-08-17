"use strict";
class HewanThree {
    constructor() {
        // properti
        this.nama = '';
        this.kaki = 0;
        this.isMamalia = false;
    }
    // method
    berenang() {
        console.log(`${this.nama} sedang berenang`);
    }
}
const bebek = new HewanThree();
console.log(bebek);
bebek.nama = "Duck";
bebek.kaki = 2;
console.log(bebek);
bebek.berenang();
