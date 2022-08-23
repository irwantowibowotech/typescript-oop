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

### Getter dan Setter
`getter` dan `setter` adalah sebuah method yang digunakan untuk mengambil (get) dan mengisi (set) sebuah property di dalam class.
```
class ProductA {
    private _price: number = 0;
    private discount: number = 0.05;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value - (value * this.discount);
    }
}
```
Setter di typescript ditandai dengan keyword `set` dan getter dengan keyword `get`. Contoh di atas adalah bagiamania kita 
memberikan method setter dan getter untuk property `_product`.
```
const productA = new ProductA();
productA.price = 2000;
console.log(productA.price); // 1900
```
Contoh di atas bagaimana kita membuat object dari class `ProductA`. Yang perlu diperhatika di sini adalah `productA.price = 2000`. 
Pada code `productA.price`, price ini akan mengacu ke method setter dan gettter price dan 2000 adalah value yang dikirimkan ke method setter.<br />
Jadi kesimpulannya adalah `productA.price (2000)` --> `set price(2000)` --> `get price`.

### Static Property dan Static Method
Static property / method adalah property atau method yang menempel pada class tersebut. Artinya adalah kita tidak perlu membuat objek untuk 
mengaksesnya, cukup dengan sebutkan nama classnya lalu panggil property / method tersebut. <br />
Untuk membuat static property / method kita cukup gunakan keyword `static` di property maupun method-nya.
```
class Ayam {
    static nama: string = "Ciung"
    static kaki: number = 2;

    static berjalan() {
        console.log(`${this.nama} berjalan dengan ${this.kaki} kaki`);
    }
}

console.log('Nama hewan :', Ayam.nama); // Nama hewan : Ciung
Ayam.berjalan(); // Ciung berjalan dengan 2 kaki
```
Yang perlu kita perhatikan adalah karena `static` itu menempel di class-nya maka penggunaan `this` tidak akan bisa digunakan 
kecuali dia bertipe static juga.
```
class Ayam {
    static kaki: number = 2;
    
    getKaki() {
        console.log(this.kaki); // error
    }
}
```
Pada contoh di atas kita mencoba untuk mengakses property `kaki` di dalam method `getKaki` dengan menggunakan `this.kaki`. 
Hal ini akan menyebabkan error karena method `getKaki` buka bertipe static. <br />
Lalu kenapa yang method `berjalan` pada code di atas bisa menggunakan `this`? Jawabannya adalah karena method berjalan tersebut bertipe `static` 
sehingga dia bisa mengguankan keyword this.
Karena static menempel pada class itu sendiri maka untuk mengaksesnya kita sebutkan nama classnya alih alih menggunakan `this`.
```
class Ayam {
    static kaki: number = 2;

    getKaki() {
        console.log(this.kaki); // error
        console.log(Ayam.kaki);
    }
}

const pitik = new Ayam();
pitik.getKaki();
```
Type `static` ini juga bersifat global. Artinya ketika mengubah isi dari property-nya maka semua object yang mengakses property tersebut juga akan berubah. 
Ini tentu berbeda dengan property biasa yang mana hanya pada object tertentu saja yang berubah.
```
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
```

### Return Type Method
Return type di sini berfungsi untuk membatasi nilai balikan yang akan dikembalikan oleh method.
```
class Burung {
    private kaki: number = 2;

    getKaki(): number {
        return this.kaki;
    }
}
```
Code di atas adalah method (getKaki()) yang mengembalikan nilai bertipe number (getKaki(): number), sehingga returnnya 
juga harus bertipe number. Apabila kita memaksa untuk mengembalikan nilai dengan tipe data berbeda maka akan menyebabkan error.<br />
Secara default ketika kita tidak menuliskan type data return-nya maka typescript akan memberi nilai defaule yaitu `void`.<br />
Void di sini akan mengizinan kita untuk tidak mereturn nilai.
```
berjalan(): void {
        console.log('Burung sedang berjalan!');
    }
```
Ada juga return type yang kita pakai apabila method tersebut adalah asychronus yaitu `Promise<T>`. `Promise<T>` ini adalah type 
return dari method yang menggunakan asynchronus (async).
```
async getNama(): Promise<string> {
        return "Proses async berhasil dieksekuasi";
    }
```
`T` pada `Promise<T>` artinya kita bebas mau mengembalikan nilai, sebagai contoh Promise<string> maka method harus mengembalikan nilai string,
begitu pula jika saya menulis Promise<number> maka return harus bertipe number.

### Abstract Class
Abstract class adalah class yang tidak bisa diinstansiasi secara langsung oleh client karena bisa dibilang bentuknya masih belum jelas (abstrak).
Setiap class yang meng-extends abstract class harus mengimplementasikan method yang sudah ditentukan oleh abstract class tersebut.<br />
Dalam abstract class ini minimal harus ada satu abstract method.<br />
Untuk membuat abstract class kita bisa gunakan keyword `abstract`.
```
abstract class Hewan2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makan(): void {
        console.log('Semua hewan pasti makan');
    }

    abstract bergerak(): void;
}
```
Kode di atas adalah contoh abstract class yang memiliki satu abstract method. Nantina class yang extends class di atas harus memiliki 
method bergerak. Dan di setiap class akan berbeda beda isi dari method bergerak ini.
```
class Kucing2 extends Hewan2{
    constructor() {
        super('Kucing');
    }

    bergerak(): void {
        console.log('Kucing berjalan');
    }
}
```
```
class Burung2 extends Hewan2 {
    constructor() {
        super('Burung');
    }

    bergerak(): void {
        console.log('Burung terbang');
    }
}
```
```
const kucing2 = new Kucing2();
kucing2.bergerak();

const burung2 = new Burung2();
burung2.bergerak();
```