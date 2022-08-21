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

### Super Constructor
Method `super()` digunakan untuk mengambil constructor yang ada di parent class-nya. Ini dilakukan di child class yang juga 
memiliki constructor. Tujuannya adalah kita bisa mengisi constructor di parent melalui object yang diambil dari class child.
```
class Employee {
    name: string;
    division: string;

    constructor(name: string, division: string) {
        this.name = name;
        this.division = division;
    }
}
```
Di sini kita memiliki sebuah class Employee yang punya constructor berisi name dan division. Ketika kita ingin membuat 
class baru yang meng-extends Employee dan juga memiliki contructor sendiri, maka kita harus menggunakan keyword `super()` 
untuk memanggil name dan division. Karena jika kita tidak memanggilnya maka akan terjadi error.
```
class Manager extends Employee{
    fee: number;

    constructor(name: string, division: string, fee: number) {
        super(name, division)
        this.fee = fee;
    }
}

let bencok = new Kodok();
bencok.berjalan(); // Kodok lagi bernafas!!
```

### Method Overriding
Method overriding adalah sebuah method yang akan menimpa method yang ada di parent class-nya.
```
class Animal {
    name: string = '';

    berjalan(): void {
        console.log('Sedang bernafas!!');
    }
}
```
Di sini kita memiliki class Animal dengan method `berjalan()`. Kemudian kita buat satu class yang meng-extends class Animal.
```
class Kodok extends Animal {
    berjalan(): void {
        console.log('Kodok lagi bernafas!!');
    }
}
```
Di class Kodok ini kita juga membuat method `berjalan`. Di sini ketika kita membuat objek dan mengakses method `berjalan` maka 
method di class Kodok yang akan dieksekusi.
```
let bencok = new Kodok();
bencok.berjalan(); // Kodok lagi bernafas!!
```

### Visibility / Access Modifier
Tujuan adanya visibility ini adalah untuk membatasi hak akses property / method di dalam class. Ada 3 macam visibility, yaitu 
`public`, `protected` dan `private`.
- `public` : bisa diakses dari mana saja.
- `protected`  : hanya bisa diakses dari class itu sendiri atau class yang menjadi turunannya.
- `private` : hanya bisa diakses di dalam class itu sendiri, bahkan di child tidak bisa mengaksesnya.
```
class Person {
    name: string;
    protected address: string;
    private isMarriage: boolean;

    constructor(name: string, address: string, isMarriage: boolean) {
        this.name = name;
        this.address = address;
        this.isMarriage = isMarriage;
    }

    walking(): void {
        console.log(`${this.name} sedang berjalan jalan`);
    }
}
```
Class di atas memiliki property dengan beberapa type access modifier. Secara default jika kita tidak mendeklarasikan type 
access modifier maka akan diset sebagai `public`.
```
class IronMan extends Person {
    private custom: string = "Zirah Baja";
    private weapon: string = "Laser";
    private isLeader: boolean = true;

    getHero(): void {
        console.log(`${this.custom} ${this.weapon} ${this.isLeader}`);
        console.log(`${this.address}`);
        // console.log(`${this.isMarriage}`) // error private modifier
    }
}
```
Di sini terlihat saat kita mengakses property `isMarriage` dari class IronMan akan terjadi error. Hal ini karena di class 
Person kita set access modifiernya sebagai `private` shingga class turunannya pun tidak akan bisa mengaksesnya.
```
let hero1 = new IronMan("Iron Man", "Gunungkidul", true);
hero1.getHero();
hero1.walking();
// hero1.custom; // error private modifier
```
Saat kita membuat objek-nya pun kita tidak akan bisa langsung mengakses property / method yang memiliki akses modifier protected / private.

### Readonly Modifier
Di typescript terdapat satu lagi modifier yang perlu kita ketahui yaitu `readonly`. `readonly` property ini akan menjadikan 
suatu property tidak bisa diubah datanya. Istilah lain dari modifier ini adalah `immutable`.
```
class Mantab {
    readonly isActive: boolean = true;
}
```
Saat kita membuat class dan memiliki property readonly maka ketika kita mencoba untuk merubah nilai property tersebut maka akan 
terjadi error.
```
const employee = new Mantab();
console.log(employee.isActive) // true
// employee.isActive = false; // error readonly
```
Sekilas ini sama dengan `const`, perbedaannya adalah jika `const` hanya bisa digunakan pada variabel biasa, sedangkan `readonly` hanya bisa 
di dalam class.