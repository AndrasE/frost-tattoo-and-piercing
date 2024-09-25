import styled from "styled-components";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.dropShadow};
  justify-content: space-evenly;
  position: relative;
`;

export const HeaderText = styled.h2`
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 8px;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.input`
  overflow: hidden;
  border: none;
  margin: 10px;
  padding: 5px 6px;
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0 1px 8px ${({ theme }) => theme.inputBoxShadow};
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.inputFocusColor};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  overflow: hidden;
  border: none;
  resize: none;

  margin: 10px;
  padding: 5px 6px;
  border-radius: 10px;
  min-height: 80px;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0 1px 8px ${({ theme }) => theme.inputBoxShadow};
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.inputFocusColor};
    outline: none;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding-right: 10px;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #1ebbd7 0%,
    #189ad3 51%,
    #1ebbd7 100%
  );
  background-size: 200% auto;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  padding: 10px 17px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-position: right center;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  position: relative;
  left: 1px;
  padding-top: 3px;
  margin-left: 5px;
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArrowRightDouble = styled(MdKeyboardDoubleArrowRight)`
  position: relative;
  left: 3px;
  padding-top: 2px;
  margin-left: 5px;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
