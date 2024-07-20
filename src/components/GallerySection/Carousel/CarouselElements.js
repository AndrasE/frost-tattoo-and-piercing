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
`;

export const IndicatorBtnsWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: 5px;
  margin: auto;
`;

export const IndicatorBtns = styled.button`
  color: #fff;
  border-radius: 5px;
  width: 15px;
  height: 4px;
  border: none;
  outline: none;
  margin: 0 3px;

  opacity: 50%;
  filter: drop-shadow(0pc 0px 2px #555);
  transition: all 0.2s ease-in-out;
  &[aria-label="true"] {
    opacity: 80%;
  }
`;
