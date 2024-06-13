import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #010606;
`;

export const AboutrWrapper = styled.div`
  display: flex;
  height: 920px;

  width: 100%;
  justify-content: center;
  @media screen and (max-width: 440px) {
    height: 720px;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  align-items: center;
  margin: 15px;
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
  padding: 15px;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
`;
