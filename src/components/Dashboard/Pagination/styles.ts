import styled from "styled-components";

// ICONS
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

interface IPropsButtonPage {
  bgColor?: string;
}

export const MainContainerPagination = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 250px);
  position: absolute;
  bottom: 20px;
  z-index: -100;
`;

export const ContainerDataPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  z-index: 100;
`;

export const Page = styled.span`
  color: ${colors.black};
  font-size: 2.1em;
`;

export const ButtonPage = styled.button<IPropsButtonPage>`
  border: none;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || ""};
`;

export const IconPreviousPage = styled(FaArrowCircleLeft)`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  font-size: 2.1em;
  cursor: pointer;
`;

export const IconNextPage = styled(FaArrowCircleRight)`
  color: ${colors.black};
  font-size: 2.1em;
  cursor: pointer;
`;
