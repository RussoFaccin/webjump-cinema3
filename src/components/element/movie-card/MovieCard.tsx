import React, {useState} from 'react';
import { Container, Heading, CardPoster, HeartIcon } from './styles';

const POSTER_URL = 'https://image.tmdb.org/t/p/w154';

interface Props {
    id: string,
    poster_path: string,
    title: string,
    is_favorite?: boolean
}

export const MovieCard = ({id: movieId, poster_path, title, is_favorite = false}: Props) => {
    const [state, setState] = useState({
        movieId,
        is_favorite
    });

    const handleFavorite = () => {
        setState({
            ...state,
            is_favorite: !state.is_favorite
        });
    };

    return (
        <Container onClick={handleFavorite}>
            <Heading>{title}</Heading>
            <CardPoster src={`${POSTER_URL}${poster_path}`}/>
            <HeartIcon color={state.is_favorite ? '#e83f5b' : 'black'}/>
        </Container>
    )
};