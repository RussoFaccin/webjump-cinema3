import React, {useRef, useState} from "react";
import { Movie } from "models/Movie";
import MovieCard from "components/element/movie-card";
import { Container, Heading, ListContainer } from "./styles";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export const MovieList = ({ title, movies }: MovieListProps) => {
  const [state, setState] = useState({
    isDragging: false,
    left: 0,
    posX: 0
  });

  const scrollContainer = useRef<HTMLDivElement>(null);

  const tmpList = movies.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />;
  });

  function handleDragStart(evt: any) {
    evt.preventDefault();
  }

  function handleMouseDown(evt: any) {
    const left = scrollContainer.current ? scrollContainer.current.scrollLeft : state.left;
    const posX = evt.clientX ? evt.clientX : evt.touches[0].clientX;

    setState({
      ...state,
      isDragging: true,
      left,
      posX
    });
  }

  function handleMouseMove(evt: any) {
    if (!state.isDragging) {
      return false;
    }

    const deltaX = evt.clientX ? evt.clientX - state.posX : evt.touches[0].clientX - state.posX;
    
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = state.left - deltaX;
    }
  }

  function handleMouseUp(evt: any) {
    setState({
      ...state,
      isDragging: false
    });
  }

  return (
    <Container
    ref={scrollContainer}
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}
      onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}
      onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}
    >
      <Heading>{title}</Heading>
      <ListContainer>{tmpList}</ListContainer>
    </Container>
  );
};
