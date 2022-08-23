class Ayam {
    static nama: string = "Ciung"
    static kaki: number = 2;

    static berjalan() {
        console.log(`${this.nama} berjalan dengan ${this.kaki} kaki`);
    }

    getKaki() {
        // console.log(this.kaki);
        console.log(Ayam.kaki);
    }
}

console.log('Nama hewan :', Ayam.nama); // Nama hewan : Ciung
Ayam.berjalan(); // Ciung berjalan dengan 2 kaki

const pitik = new Ayam();
const pitik2 = new Ayam();
const pitik3 = new Ayam();

pitik.getKaki(); // 2
pitik2.getKaki(); // 2
pitik3.getKaki(); // 2

Ayam.kaki = 4;

pitik.getKaki(); // 4
pitik2.getKaki(); // 4
pitik3.getKaki(); // 4