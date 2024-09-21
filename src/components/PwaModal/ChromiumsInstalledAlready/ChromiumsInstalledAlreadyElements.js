import styled from "styled-components";
import { IoMdOpen } from "react-icons/io";

export const InstallStep = styled.li`
  align-items: center;
  display: flex;
  font-size: 0.85rem;
  font-weight: 300;
  justify-content: flex-start;
  line-height: 20px;
  margin: 20px 0;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
`;

export const OpenIcon = styled(IoMdOpen)`
  width: 25px;
  height: 25px;
  margin-right: 25px;
`;
