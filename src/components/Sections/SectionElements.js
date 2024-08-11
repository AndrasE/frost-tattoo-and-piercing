import styled from "styled-components";

export const SectionWrapper = styled.div`
  /* this is only needed to attach the id for it so the navbar correctly target the section as while using framer-motion to scale in the container and content while the scale not 100% completed it will offset the scroll -->>  import { animateScroll as scroll } from "react-scroll"  */
`;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 80px;
    align-content: flex-start;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ reversed }) =>
    reversed ? `"col2 col1"` : `"col1 col2"`}; /* Adjust grid-template-areas */

  @media screen and (max-width: 768px) {
    grid-gap: 30px;
    grid-template-areas: "col1" "col2"; /* Always stack columns on mobile */
    align-content: center;
  }
`;

export const Column1 = styled.div`
  align-items: center;
  grid-area: col1;
`;

export const TextWrapper = styled.div`
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  align-content: center;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Content = styled.p`
  max-width: 440px;
  font-size: 1rem;
  text-align: justify;
  line-height: 26px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Column2 = styled.div`
  align-items: center;
  grid-area: col2;
`;

export const ImgWrapper = styled.div`
  max-width: 400px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
