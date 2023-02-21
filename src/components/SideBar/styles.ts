import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

interface IPropsSideBar {
  width?: string;
}

export const ContainerSideBar = styled.div`
  border-radius: 1.5rem;
  background-color: #000;
  width: ${({ width }: IPropsSideBar) => width || "70px"};
  height: 95vh;
  transition: all 0.7s;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: fixed;
  left: 15px;
`;

export const IconOpenSideBar = styled(IoMdMenu)`
  margin-top: 10px;
  cursor: pointer;
  font-size: 2em;
  color: #fff;
`;

export const IconCloseSideBar = styled(AiFillCloseCircle)`
  margin-top: 10px;
  cursor: pointer;
  font-size: 2em;
  color: #fff;
`;
