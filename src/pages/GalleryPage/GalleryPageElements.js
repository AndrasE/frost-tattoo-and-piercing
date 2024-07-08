import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  margin: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    margin: 15px 15px;
  }
`;
