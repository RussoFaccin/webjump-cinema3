import { Movie } from 'shared/types';

export type StorageType = {
    STORAGE_KEY: string;
    getFavorites: () => Movie[];
    setFavorites: (favoriteData: Movie[]) => void;
  };