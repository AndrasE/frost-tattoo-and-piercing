import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 50%;
  left: 112px;
  transform: translate(-50%, -50%);
  height: 271.6px;
  z-index: 999;
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
  background-color: #1ebbd7;
  padding: 5px 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;

export const ModalLabel = styled.p`
  font-size: 1.1rem;

  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #16191d;
`;
