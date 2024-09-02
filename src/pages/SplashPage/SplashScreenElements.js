import Lottie from "lottie-react";
import styled from "styled-components";

export const SplashContainer = styled.div`
  position: fixed;
  display: flex;
  inset: 0;
  z-index: 999;
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  padding-bottom: 4px;
  position: absolute;
  width: 55px;
`;

export const LottieAnimation = styled(Lottie)`
  width: 300px;
`;
