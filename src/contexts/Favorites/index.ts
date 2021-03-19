import React from 'react';
import { Movie } from 'models';

export interface ContextType {
    favoriteMovies: Movie[];
    toggleFavoriteList: Function;
}

export const FavoritesContext = React.createContext({} as ContextType);