class HewanThree {
    // properti
    nama: string = '';
    kaki: number = 0;
    isMamalia: boolean = false;

    // method
    berenang(): void {
        console.log(`${this.nama} sedang berenang`);
    }
}

const bebek = new HewanThree();
console.log(bebek);

bebek.nama = "Duck";
bebek.kaki = 2;
console.log(bebek);

bebek.berenang();