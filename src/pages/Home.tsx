import React from 'react';
import { Movie } from 'models/Movie';
import MovieCard from 'components/element/movie-card';

const Home = () => {
    const movie = new Movie({
        id: 527774,
        title: '"Raya e o Último Dragão"',
        poster_path: '/yXrb84zJidCefyhTWHwo4yCDvwz.jpg',
        backdrop_path: '/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg',

    });
    
    return <MovieCard {...movie} />
};

export default Home;