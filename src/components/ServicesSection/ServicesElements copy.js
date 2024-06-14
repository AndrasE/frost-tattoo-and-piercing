import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #010606;
`;

export const ServicesrWrapper = styled.div`
  height: 860px;
  margin: auto;
  max-width: 520px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const ServicesTitleRow = styled.div`
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

export const ServicesImgRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
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
