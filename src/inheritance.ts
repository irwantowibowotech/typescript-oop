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
admin.login();
