import styled from "styled-components";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";

export const Divider = styled.hr`
  height: 1px;
  opacity: 10%;
  margin: 0 5px 0 5px;
  border: none;
  background-color: ${({ theme }) => theme.fontColor};
`;

export const Description = styled.p`
  margin: 0;
  padding: 20px 30px;
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 20px;
  text-align: justify;
  color: ${({ theme }) => theme.fontColor};
`;

export const InstallStepsWrapper = styled.ol`
  margin: 0;
  padding: 10px 30px;
`;

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

export const ShareIcon = styled(IoShareOutline)`
  width: 25px;
  height: 25px;
  margin-right: 25px;
`;

export const AddIcon = styled(MdOutlineAddBox)`
  width: 25px;
  height: 25px;
  margin-right: 25px;
`;
