"use strict";
class User {
    constructor() {
        this.name = '';
        this.role = '';
    }
    login() {
        console.log(`Sedang login`);
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.activity = '';
    }
}
const admin = new Admin();
admin.name = "Si Udin";
admin.role = "Si abal - abal";
admin.activity = "Sedang ngibulin via youtube";
admin.login();
