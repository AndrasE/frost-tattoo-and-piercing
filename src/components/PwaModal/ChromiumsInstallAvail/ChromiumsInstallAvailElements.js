import styled from "styled-components";

export const InstallPwaBtnWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  line-height: 20px;
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
