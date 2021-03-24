import { Movie } from "models";

export type StorageType = {
    STORAGE_KEY: string;
    getFavorites: () => Movie[];
    setFavorites: (favoriteData: Movie[]) => void;
  };