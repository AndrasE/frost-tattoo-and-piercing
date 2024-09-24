import styled from "styled-components";
import Lottie from "lottie-react";

export const SuccessModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const SuccessModalText = styled.h2`
  align-self: center;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 400;
  margin-left: 8px;

  color: ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const LottieAnimation = styled(Lottie)`
  align-self: center;
  width: 150px;
  height: 150px;
`;
