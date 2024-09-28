import styled from "styled-components";
import { SlSocialFacebook } from "react-icons/sl";
import { IoMailUnreadOutline } from "react-icons/io5";
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
`;

export const LinksContainer = styled.div`
  margin-bottom: 18px;
`;

export const LinkWrapper = styled.div`
  position: relative;
  margin: 8px 0;
`;

export const LinkText = styled.div`
  font-size: 1rem;
  margin-left: 5px;
  line-height: 26px;
  position: relative; /* Ensure the ::after is positioned relative to the text */

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.accentColor};
    bottom: 3px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0); /* Start invisible */
    transition: transform 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover ${LinkText}::after {
    transform-origin: left; /* Animate from left to right */
    transform: scaleX(1); /* Show the underline */
  }
`;

export const FacebookIcon = styled(SlSocialFacebook)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.accentColor};
  padding: 0 4px 0 3px;
  border-radius: 5px;
  border: 1px solid;
`;

export const EmailIcon = styled(IoMailUnreadOutline)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.accentColor};
  padding: 4px;
  border-radius: 5px;
  border: 1px solid;
`;

export const PhoneIcon = styled(FiPhone)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.accentColor};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid;
`;

export const IframeWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;
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
