import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";

export const Modal = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
  left: ${({ $settingsOpen }) => ($settingsOpen ? "0" : "-186px")};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
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
`;

export const SettingsLabel = styled.p`
  font-size: 1rem;
  margin: 15px 0 10px 0;
  border-bottom: 2px solid #1ebbd7;
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
  padding-left: 3px;
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
