import styled from "styled-components";

export const BlurAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(6px);
  z-index: ${({ $settingsOpen }) => ($settingsOpen ? 4 : 0)};
  transition: filter 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;
