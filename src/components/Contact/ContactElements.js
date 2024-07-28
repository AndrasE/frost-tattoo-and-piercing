import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export const Container = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 80px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-gap: 30px;
    grid-template-areas: "col1" "col2";
    align-content: center;
  }
`;

export const Column1 = styled.div`
  align-items: center;
  grid-area: col1;
`;

export const TextWrapperCol1 = styled.div`
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  align-content: center;

  &:hover {
    transition: 0.3s ease-in-out;
    background-color: #1b1f24;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #fff;
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

export const TextWrapperCol2 = styled.div`
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  align-content: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const FacebookIcon = styled(FaFacebookF)`
  height: 30px;
  width: 30px;
  color: #1ebbd7;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid white;
`;

export const LinkText = styled.div`
  font-size: 1rem;
  margin-left: 5px;
  line-height: 26px;
  color: #fff;
  transition: 0.9s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
