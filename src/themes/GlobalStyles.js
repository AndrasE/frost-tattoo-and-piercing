// src/themes/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset and basic styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Encode Sans Expanded", sans-serif;
  }

  :root {
    //main themes
    --background-color: ${(props) => props.theme.backgroundColor};
    --font-color: ${(props) => props.theme.fontColor};
    --accentColor: ${(props) => props.theme.accentColor};
    --drop-shadow: ${(props) => props.theme.dropShadow};
   //gallerypage svgs  
    --svg-primary-color: ${(props) => props.theme.svgPrimaryColor};
    --svg-secondary-color: ${(props) => props.theme.svgSecondaryColor};
  }


/* workaround no negatie sideeffect: "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly."https://github.com/framer/motion/issues/1853 [BUG] useScroll() with container option behave strangely #1853*/
  html {
    position: relative;
  }

  /* Body styles */
  body {
    background-color: ${({ theme }) => theme.backgroundColor}; 
  }

  h1, h2, p, a, span {
    color: ${({ theme }) => theme.fontColor};
  }

  /* Custom Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 3px;
  }

  body::-webkit-scrollbar-track {
    background: transparent ;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accentColor};  ;
  }

`;
