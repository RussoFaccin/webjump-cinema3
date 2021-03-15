import React from 'react';
import Highlights from 'components/block/Highlights';
import { Movie } from 'models';

const Home = () => {
    const movies = [
        new Movie({
            id: 527774,
            title: 'Raya e o Último Dragão',
            poster_path: 'https://image.tmdb.org/t/p/w92/yXrb84zJidCefyhTWHwo4yCDvwz.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/w300/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg',
            overview: 'O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido.',
        }),
        new Movie({
            id: 587807,
            title: 'Tom & Jerry - O Filme',
            poster_path: 'https://image.tmdb.org/t/p/w92/6KErczPBROQty7QoIsaa6wJYXZi.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/w300/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg',
            overview: 'Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento.',
        }),
        new Movie({
            id: 484718,
            title: 'Um Príncipe em Nova York 2',
            poster_path: 'https://image.tmdb.org/t/p/w92/mpXRG5zPUT18IeYvCoC4zOscked.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/w300/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg',
            overview: 'Situado no luxuoso país da realeza Zamunda, o recém coroado Rei Akeem e seu confidente Semmi embarcam em uma nova aventura que os levará ao redor do mundo: de sua grande nação Africana ao Queens, bairro de Nova York – onde tudo começou!',
        }),
    ];

    return <Highlights movieList={movies} />
};

export default Home;