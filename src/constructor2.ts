class HewanFour {
    nama: string;
    kaki: number;
    mamalia: boolean;

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }

    getHewan():void {
        console.log(`${this.nama} memiliki jumlah kaki ${this.kaki} dan konfirmasi mamalia : ${this.mamalia}`);
    }
}

let kambing = new HewanFour("Embekk", 4, true);
kambing.getHewan();