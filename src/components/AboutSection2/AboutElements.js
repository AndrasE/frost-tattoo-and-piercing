import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
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
