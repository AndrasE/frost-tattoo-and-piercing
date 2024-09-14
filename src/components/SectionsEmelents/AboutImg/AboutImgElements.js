import styled from "styled-components";

export const ImgWrapper = styled.div`
  max-width: 450px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
`;
