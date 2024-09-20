import styled from "styled-components";

export const ImgWrapper = styled.div`
  max-width: 450px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 20px;

  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
