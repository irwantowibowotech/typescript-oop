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