import { StorageType } from './types';

export const AppStorage: StorageType = {
  STORAGE_KEY: "favoriteMovie",
  getFavorites() {
    let favorites: string | null = localStorage.getItem(this.STORAGE_KEY);
    return favorites === null ? [] : JSON.parse(favorites);
  },
  setFavorites(favoriteData) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favoriteData));
  },
};