import styled from "styled-components";
import { colors } from "../../styles/colors";

// ICONS
import { MdList } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { GoGraph } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { weightFonts } from "@src/styles/weight";

export const ContainerSideBar = styled.div`
  background-color: ${colors.black};
  width: 250px;
  height: 100%;
  transition: all 0.7s;
  display: flex;
  z-index: 10000;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerIconsAndLinks = styled.div`
  margin: 20px 40px 0 0;
  display: flex;
  align-items: flex-start;
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
`;

export const IconCategories = styled(BiCategory)`
  color: ${colors.white};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;
`;

export const IconProducts = styled(MdList)`
  color: ${colors.white};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;
`;

export const IconGraphic = styled(GoGraph)`
  color: ${colors.white};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;
`;

export const ContainerByLink = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  transition: all 0.5s;
  border-radius: 0.5rem;
  padding: 0.3rem;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.2);
  }
`;

export const DescriptionLink = styled.span`
  color: ${colors.white};
  font-size: 0.9em;
  font-weight: ${weightFonts.w700};
`;

export const ContainerLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.5s;
  border-radius: 0.5rem;
  padding: 0.3rem;
  position: absolute;
  bottom: 15px;
  left: 20px;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.2);
  }
`;

export const IconLogout = styled(RiLogoutCircleRLine)`
  color: ${colors.white};
  font-size: 2.2em;
  cursor: pointer;
  transition: all 0.7s;
  padding: 0.2rem;
`;
