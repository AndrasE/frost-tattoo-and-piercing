import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionModal = styled(motion.div)`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  width: 100%;
  height: 120px;
  display: none;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-top: 1px solid ${({ theme }) => theme.accentColor};
  border-right: 1px solid ${({ theme }) => theme.accentColor};
  border-left: 1px solid ${({ theme }) => theme.accentColor};
  border-radius: 15px 15px 0 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const HeaderIcon = styled.img`
  border-radius: 7.5px;
  height: 50px;
  overflow: hidden;
  width: 50px;
`;

export const HeaderTitleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  justify-content: flex-start;
  padding: 4px 15px;
  text-align: left;
`;

export const HeaderTitle = styled.h1`
  color: ${(theme) => theme.fontColor};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const HeaderAddress = styled.h2`
  color: ${(theme) => theme.fontColor};
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

export const HeaderBtn = styled.button`
  position: relative;
  left: 5px;
  bottom: 5px;
  padding-top: 1px;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const Path = styled.path`
  stroke-width: 1.7;
  stroke: ${({ theme }) => theme.fontColor};
`;
