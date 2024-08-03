import styled from "styled-components";
import { motion } from "framer-motion";

export const ScrollProgress = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform-origin: 0%;
  background-color: #1ebbd7;
`;
