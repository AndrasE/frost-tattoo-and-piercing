import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #010606;
`;

export const ServicesrWrapper = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 25px 25px;
  }
`;

export const ServicesRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Heading = styled.h1`
  margin: auto;
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 380px;
`;

export const Img = styled.img`
  object-fit: cover;
  padding: 10px;
  width: 100%;
  border-radius: 20px;
`;
