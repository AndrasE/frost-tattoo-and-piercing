import styled from "styled-components";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export const ContentContainer = styled.div`
  margin: auto;
  max-width: 400px;
  aspect-ratio: 1/1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
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

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 218px;
    height: 2px;
    border-radius: 4px;
    background-color: #1ebbd7;
    bottom: 2px;
    left: 35px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media screen and (max-width: 480px) {
    &::after {
      width: 198px;
    }
  }
`;

export const LinkText = styled.div`
  font-size: 1rem;
  margin-left: 5px;
  line-height: 26px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FacebookIcon = styled(FiFacebook)`
  height: 30px;
  width: 30px;
  color: #1ebbd7;
  padding: 0 4px 0 3px;
  border-radius: 5px;
  border: 1px solid white;
`;

export const FacebookLink = styled(Link)`
  &::after {
    width: 217.7px;
  }

  @media screen and (max-width: 480px) {
    &::after {
      width: 195.9px;
    }
  }
`;

export const EmailIcon = styled(MdOutlineEmail)`
  height: 30px;
  width: 30px;
  color: #1ebbd7;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid white;
`;

export const EmailLink = styled(Link)`
  &::after {
    width: 191.9px;
  }

  @media screen and (max-width: 480px) {
    &::after {
      width: 172.7px;
    }
  }
`;

export const PhoneIcon = styled(BsTelephone)`
  height: 30px;
  width: 30px;
  color: #1ebbd7;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid white;
`;

export const PhoneLink = styled(Link)`
  &::after {
    width: 117.1px;
  }

  @media screen and (max-width: 480px) {
    &::after {
      width: 105.4px;
    }
  }
`;

export const IframeWrapper = styled.div`
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
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
`;