import styled from "styled-components";

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

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 10px;
`;

export const SendBtnLabel = styled.h2`
  position: relative;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 8px;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }

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
`;

export const BtnWrapper = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;

  &:hover ${SendBtnLabel}::after {
    transform-origin: left; /* Animate from left to right */
    transform: scaleX(1); /* Show the underline */
  }
`;

export const SendBtnImg = styled.img`
  width: 40px;
  height: 35px;
  margin-left: 6px;
`;
