import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
`;

export const HeroBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MotionVideo = styled(motion.video)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.3rem;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const LottieAnimation = styled(Lottie)`
  position: absolute;
  bottom: 0;
  width: 90px;
  z-index: 1;
`;

export const ScrollLink = styled(LinkScroll)`
  position: absolute;
  bottom: 28px;
  width: 50px;
  height: 50px;
  z-index: 2;
  cursor: pointer;
`;
