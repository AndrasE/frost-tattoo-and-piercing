import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  max-width: 450px;
  border-radius: 20px;
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
`;
