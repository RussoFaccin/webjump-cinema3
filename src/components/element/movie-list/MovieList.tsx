import React from 'react';
import { Movie } from 'models/Movie';
import MovieCard from 'components/element/movie-card'
import { Container, Heading, ListContainer } from './styles';

interface MovieListProps {
    title: string,
    movies: Movie[]
}

export const MovieList = ({title, movies}: MovieListProps) => {
    const tmpList = movies.map((movie) => {
        return <MovieCard {...movie} />
    });
    
    return (
        <Container>
            <Heading>{title}</Heading>
            <ListContainer>
                {tmpList}
            </ListContainer>
        </Container>
    );
}