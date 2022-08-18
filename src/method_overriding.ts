class Animal {
    name: string = '';

    berjalan(): void {
        console.log('Sedang bernafas!!');
    }
}

class Kodok extends Animal {
    berjalan(): void {
        console.log('Kodok lagi bernafas!!');
    }
}

let bencok = new Kodok();
bencok.berjalan(); // Kodok lagi bernafas!!