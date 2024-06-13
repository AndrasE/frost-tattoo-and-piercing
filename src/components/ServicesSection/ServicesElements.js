import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #010606;
`;

export const ServicesrWrapper = styled.div`
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 440px) {
  }
`;

export const CardTitle = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;

export const ServicesRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Column1 = styled.div`
  align-items: center;
`;

export const Card = styled.div`
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
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

export const CardWrap = styled.div`
  max-width: 330px;
`;

export const Img = styled.img`
  object-fit: cover;
  padding: 10px;
  width: 100%;
  border-radius: 20px;
`;
