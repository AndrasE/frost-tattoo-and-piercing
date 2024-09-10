import styled from "styled-components";

export const BlurAnimation = styled.div`
  filter: ${({ $settingsOpen }) => ($settingsOpen ? "blur(6px)" : "none")};
  transition: filter 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 1000;
  pointer-events: ${({ $settingsOpen }) => ($settingsOpen ? "none" : "auto")};
`;
