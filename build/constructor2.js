"use strict";
class HewanFour {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    getHewan() {
        console.log(`${this.nama} memiliki jumlah kaki ${this.kaki} dan konfirmasi mamalia : ${this.mamalia}`);
    }
}
let kambing = new HewanFour("Embekk", 4, true);
kambing.getHewan();
