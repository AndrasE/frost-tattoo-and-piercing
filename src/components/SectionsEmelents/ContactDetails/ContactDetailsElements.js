import styled from "styled-components";
import { SlSocialFacebook } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export const ContentContainer = styled.div`
  margin: auto;
  max-width: 450px;
  aspect-ratio: 1/1;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s ease-in-out;
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
`;

export const LinkText = styled.div`
  font-size: 1rem;
  margin: 8px;
  line-height: 20px;
  position: relative; /* Ensure the ::after is positioned relative to the text */

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.accentColor};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0); /* Start invisible */
    transition: transform 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FacebookIcon = styled(SlSocialFacebook)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.accentColor};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const EmailIcon = styled(IoMailOutline)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.accentColor};
  padding: 4px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const PhoneIcon = styled(FiPhone)`
  height: 30px;
  width: 30px;
  border-color: red;
  color: ${({ theme }) => theme.accentColor};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover ${LinkText}::after {
    transform-origin: left; /* Animate from left to right */
    transform: scaleX(1); /* Show the underline */
  }

  &:hover ${FacebookIcon} {
    border-color: ${({ theme }) => theme.accentColor};
    transition: all 0.3s ease-in-out;
  }

  &:hover ${EmailIcon} {
    border-color: ${({ theme }) => theme.accentColor};
    transition: all 0.3s ease-in-out;
  }

  &:hover ${PhoneIcon} {
    border-color: ${({ theme }) => theme.accentColor};
    transition: all 0.3s ease-in-out;
  }
`;

export const IframeWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  margin-top: auto;
  overflow: hidden;
  border-radius: 9px;

  @media screen and (max-width: 870px) {
    aspect-ratio: 16/8;
  }
  @media screen and (max-width: 768px) {
    aspect-ratio: 16/9;
  }
`;

export const IFrame = styled.iframe`
  //bit of a funky workaround styling to hide away focus outline of the iframe
  position: absolute;
  top: -2px;
  right: -2px;
  height: 102.5%;
  width: 102%;
  border: none;
  outline: none;
`;
