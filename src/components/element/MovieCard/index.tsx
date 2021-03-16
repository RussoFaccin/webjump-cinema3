import React, {useState} from 'react';
import { Container, Heading, CardPoster, HeartIcon } from './styles';
import { Movie } from 'models/Movie';

const MovieCard = ({id, title, poster_path: poster = '', favorite = false}: Movie) => {
    const [state, setState] = useState({
        id,
        title,
        poster,
        favorite
    });

    const handleFavorite = () => {
        setState({
            ...state,
            favorite: !state.favorite
        });
    };

    return (
        <Container>
            <Heading>{title}</Heading>
            <CardPoster src={state.poster} alt={state.title}/>
            <HeartIcon color={state.favorite ? '#e83f5b' : 'black'}  onClick={handleFavorite}/>
        </Container>
    )
};

export default MovieCard;