import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #010606;
`;

export const AboutrWrapper = styled.div`
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

export const AboutRow = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-gap: 0;
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  align-items: center;
  grid-area: col1;
`;

export const TextWrap = styled.div`
  margin: auto;
  max-width: 400px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Content = styled.p`
  max-width: 440px;
  font-size: 1rem;
  text-align: justify;
  line-height: 26px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Column2 = styled.div`
  align-items: center;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;
