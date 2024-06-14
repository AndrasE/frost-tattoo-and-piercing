import styled from "styled-components";

export const GalleryContainer = styled.div`
  background: #010606;
`;

export const GalleryrWrapper = styled.div`
  height: 860px;
  margin: auto;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const GalleryTitleRow = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  align-content: end;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 35px;
`;

export const GalleryImgRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgTitle = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    scale: 1.02;
  }
`;
