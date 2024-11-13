import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export const MotionModal = styled(motion.div)`
  position: absolute;
  max-height: 100vh;
  display: flex;
  top: 40vh;
  flex-direction: row;
  align-items: center;
  z-index: ${({ $settingsOpen }) => ($settingsOpen ? 6 : 1)};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ $isStandalone }) =>
    $isStandalone ? "10px 5px 20px 0" : "20px 2px 35px 0"};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: ${({ $settingsOpen, theme }) =>
    $settingsOpen ? `5px 5px 25px ${theme.dropShadow}` : "none"};
`;

export const SettingsLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 20px 0 2px 0;
  border-bottom: 1px solid ${({ theme }) => theme.accentColor};
`;

export const SettingsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px;
`;

export const SettingWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  margin: 0 2px;
  border-radius: 15px;
  background-size: 200% auto;
  background-image: ${({ $isSelected }) =>
    $isSelected
      ? `linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  )`
      : "none"};
`;
export const SettingLabel = styled.span`
  font-size: 0.9rem;
  padding-left: 3px;
  font-weight: 300;
`;

export const Sun = styled(FiSun)`
  color: ${(props) => props.theme.fontColor};
`;

export const Moon = styled(FiMoon)`
  color: ${(props) => props.theme.fontColor};
`;

export const FlagIcon = styled.img`
  height: 1rem;
`;

export const InstallPwaBtn = styled.button`
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-radius: 50px;
  white-space: nowrap;
  padding: 6px 10px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 0.9rem;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }
`;

export const LabelContainer = styled.div`
  //empty div for transparent
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
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 3px 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }
`;
export const ModalLabel = styled.p`
  position: relative;
  bottom: 2.5px;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: -2px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #16191d;
`;
