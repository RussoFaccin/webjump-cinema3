import { Movie } from 'models';

export class Storage {
    static STORAGE_KEY = 'favoriteMovie';
    static getFavorites(): Movie[] {
        let favorites: string | null = localStorage.getItem(Storage.STORAGE_KEY);
        return favorites === null ? [] : JSON.parse(favorites);
    }

    static setFavorites(favoriteData: Movie[]) {
        localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify(favoriteData));
    }
}