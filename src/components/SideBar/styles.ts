import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdList } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { colors } from "../../styles/colors";

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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 100;
`;

export const IconOpenSideBar = styled(IoMdMenu)`
  margin: 10px 0 25px 0;
  cursor: pointer;
  font-size: 2em;
  color: #fff;
`;

export const IconCloseSideBar = styled(AiFillCloseCircle)`
  margin: 10px 0 25px 0;
  cursor: pointer;
  font-size: 2em;
  color: #fff;
`;

export const ContainerIconsAndLinks = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.1em;
`;

export const IconUsers = styled(ImUsers)`
  color: ${colors.white};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const IconProducts = styled(MdList)`
  color: ${colors.white};
  font-size: 2.5em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;
