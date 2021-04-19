import React, { useRef, useState } from "react";
import { Container } from "./styles";
import { Props } from './types';

const ScrollDrag = ({ children }: Props) => {
  const [state, setState] = useState({
    isDragging: false,
    left: 0,
    posX: 0,
  });

  const scrollContainer = useRef<HTMLDivElement>(null);

  function handleDragStart(evt: React.DragEvent) {
    evt.preventDefault();
  }

  function handleMouseDown(evt: any) {
    const left = scrollContainer.current
      ? scrollContainer.current.scrollLeft
      : state.left;
    const posX = evt.clientX ? evt.clientX : evt.touches[0].clientX;

    setState({
      ...state,
      isDragging: true,
      left,
      posX,
    });
  }

  function handleMouseMove(evt: any) {
    if (!state.isDragging) {
      return false;
    }

    const dX = evt.clientX
      ? evt.clientX - state.posX
      : evt.touches[0].clientX - state.posX;

    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = state.left - dX;
    }
  }

  function handleMouseUp(evt: any) {
    setState({
      ...state,
      isDragging: false,
    });
  }

  return (
    <Container
      ref={scrollContainer}
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </Container>
  );
};

export default ScrollDrag;
