import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  min-height: min-content;
  max-height: 400px;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
