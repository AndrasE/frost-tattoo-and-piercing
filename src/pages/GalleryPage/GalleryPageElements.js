import styled from "styled-components";

export const GalleryContainer = styled.div`
  align-items: center;
  height: 100vw;
  margin: 80px auto;
  width: 80%;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ImgItemWrapper = styled.div`
  position: relative;
  width: 25%;
  padding: 20px;
  @media screen and (max-width: 1000px) {
    width: 33.33%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  transition: all 0.8s;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;
