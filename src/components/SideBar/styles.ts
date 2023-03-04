import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

// ICONS

import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdList } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { GoGraph } from "react-icons/go";

interface IPropsSideBar {
  width?: string;
  display?: string;
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

export const ContainerSideBackground = styled.div`
  border-radius: 1.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  width: ${({ width }: IPropsSideBar) => width || "70px"};
  height: 95vh;
  transition: all 0.7s;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  visibility: ${({ display }: IPropsSideBar) => display || "visible"};

  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 90;
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
  gap: 0.8em;
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

export const ContainerLinks = styled.div`
  margin-top: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1.1em;
`;

export const LinksNav = styled.span`
  color: ${colors.white};
  width: 100%;
  text-align: center;
  padding: 0.3rem;
  font-size: 0.9em;
  font-weight: ${weightFonts.w700};
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const IconLogout = styled(RiLogoutCircleRLine)`
  color: ${colors.white};
  font-size: 2.2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;
  position: absolute;
  bottom: 15px;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const IconGraphic = styled(GoGraph)`
  color: ${colors.white};
  font-size: 2.2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;
