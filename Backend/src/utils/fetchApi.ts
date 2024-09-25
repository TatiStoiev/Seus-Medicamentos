import fetch = require("node-fetch");


class FetchApi {
    private url: string; 

    constructor(url: string) {
        this.url = url;
    }

    async fetchMedicine(medicineName: string) {
        try {
            const response = await fetch(`${this.url}/pesquisar?nome=${medicineName}`)
            const data = await response.json();
            console.log('resultado de data dentro do fetch:', data)
            return data;
        } catch (error) {
            return error;
        }
    }
}

const api = new FetchApi('https://bula.vercel.app')
console.log('resultado da classe api:', api.fetchMedicine('omeprazol'))