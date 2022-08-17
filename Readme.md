### Class dan Object
Class adalah sebuah blueorint / kerangka yang nantinya akan dibuat object. Class biasanya berisi proprty, method, maupun constructor 
yang bisa kita manfaatkan ketika kita membuat objek dari class tersebut.<br />
Sedangkan object adalah implementasi dari class yang kita biat.
contoh class adalah sebagai berikut
```
class Hewan {}
```
Sedangkan contoh object adalah sebagai berikut
```
const kodok = new Hewan();
const kucing = new Hewan();
```
Contoh di atas adalah bagaimana kita membuat `class` dan membuat `object` dari class yang kita buat.

### Constructor
Seperti yang pernah kita bahas di pelajaran dasar typescript, constructor adalah sebuah method yang akan dieksekusi pertama kali 
saat kita membuat object.
```
class HewanTwo {
    constructor() {
        console.log('Contructor dipanggil terlebih dahulu');
    }
}

let katak = new HewanTwo();
```
Ketika kita membuat object dari class `HewanTwo` maka secara otomatis method `contructor` ini akan dieksekusi.

### Property Dan Method
Property sama halnya dengan variabel / attribut yang nantinya akan menampung value saat kita membuat object nanti. 
Sedangkan method sama halnya dengan function.
```
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
console.log(bebek); // HewanThree { nama: '', kaki: 0, isMamalia: false }

bebek.nama = "Duck";
bebek.kaki = 2;
console.log(bebek); // HewanThree { nama: 'Duck', kaki: 2, isMamalia: false }

bebek.berenang(); // Duck sedang berenang
```

### Constructor Lanjutan
Dengan adanya constructor yang dijalankan pertama kali setiap membuat object, maka kita bisa set property kita di constructor, seperti contoh :
```
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
kambing.getHewan(); // Embekk memiliki jumlah kaki 4 dan konfirmasi mamalia : true
```

### Inheritance
Inheritance atau pewarisan adalah suatu class parent yang menurunkan proprty dan method di class child. Jadi ketika ada suatu class 
melakukan inheritance ke class parent maka semua property dan method di class parent bisa dipakai oleh class child tersebut.
```
class User {
    name: string = '';
    role: string = '';

    login(): void {
        console.log(`Sedang login`);
    }
}

class Admin extends User {
    activity: string = '';
}

const admin = new Admin();
admin.name = "Si Udin";
admin.role = "Si abal - abal";
admin.activity = "Sedang ngibulin via youtube";
admin.login(); // Sedang login
```