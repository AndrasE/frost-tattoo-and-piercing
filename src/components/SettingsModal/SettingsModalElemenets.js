import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export const Modal = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  display: flex;

  flex-direction: row;
  align-items: center;
  transition: 0.3s ease-in-out;
  left: ${({ $settingsOpen }) => ($settingsOpen ? "0" : "-209px")};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px;
  border-top: 2px solid #1ebbd7;
  border-right: 2px solid #1ebbd7;
  border-bottom: 2px solid #1ebbd7;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.4s ease-in-out;
  opacity: ${({ $settingsOpen }) => ($settingsOpen ? "100%" : "0%")};
`;

export const SettingsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsLabel = styled.p`
  font-size: 1rem;
  margin: 15px 0 10px 0;
  border-bottom: 2px solid #1ebbd7;
`;

export const SettingWrapper = styled.div`
  padding: 5px;
  margin: 7px;
  border-radius: 15px;
  margin-bottom: 15px;
`;

export const Setting = styled.div`
  cursor: pointer;
  padding: 3px;
  transition: all 0.1s ease-in-out;

  &:hover {
    scale: 1.2;
  }
`;

export const Sun = styled(IoSunnyOutline)`
  padding: 3px;
  font-size: 2.1rem;
  color: ${({ theme }) => theme.fontColor};
`;

export const Moon = styled(IoMoonOutline)`
  padding: 3px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.fontColor};
`;

export const FlagIcon = styled.img`
  height: 1.2rem;
`;

export const LabelContainer = styled.div`
  //empty div for transparent bg
`;

export const LabelWrapper = styled.div`
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 3px 0;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }
`;
export const ModalLabel = styled.p`
  position: relative;
  bottom: 2.5px;
  font-size: 1rem;
  letter-spacing: -2px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #16191d;
`;
