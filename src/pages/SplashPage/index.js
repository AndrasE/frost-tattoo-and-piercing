import React from "react";
import {
  AnimationWrapper,
  LogoImg,
  LottieAnimation,
  SplashContainer,
} from "./SplashScreenElements";
import logo from "../../images/splashAnimation/logo.png";
import loading from "../../images/splashAnimation/loading.json";

const SplashScreen = () => {
  return (
    <SplashContainer>
      <AnimationWrapper>
        <LogoImg src={logo} alt="logo" />
        <LottieAnimation animationData={loading} />
      </AnimationWrapper>
    </SplashContainer>
  );
};

export default SplashScreen;
