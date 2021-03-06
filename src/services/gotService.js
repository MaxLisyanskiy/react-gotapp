export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters() {
        return this.getResourse(`/characters`);
    }
    getCharacters(id) {
        return this.getResourse(`/characters/${id}`);
    }
}