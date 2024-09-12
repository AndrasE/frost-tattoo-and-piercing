import styled from "styled-components";

//overlaying trasparent container to be a swipescreen for the herosection
export const SwipeSceenContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  color: transparent;
  background-color: transparent;

  z-index: ${({ $settingsOpen }) => ($settingsOpen ? 4 : 1)};
`;
