import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  padding: 12px 20px;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 1rem;
  white-space: pre-wrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "fff" : "#01bf71")};
  }
`;
