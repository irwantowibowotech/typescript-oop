class Burung {
    private kaki: number = 2;

    getKaki(): number {
        return this.kaki;
    }

    berjalan(): void {
        console.log('Burung sedang berjalan!');
    }

    async getNama(): Promise<string> {
        return "Proses async berhasil dieksekuasi";
    }
}