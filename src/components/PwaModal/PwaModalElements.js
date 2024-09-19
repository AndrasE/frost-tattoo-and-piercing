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
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-top: 2px solid ${({ theme }) => theme.accentColor};
  border-right: 2px solid ${({ theme }) => theme.accentColor};
  border-left: 2px solid ${({ theme }) => theme.accentColor};
  border-radius: 15px 15px 0 0;
`;
