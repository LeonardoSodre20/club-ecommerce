import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { weightFonts } from "../../../styles/weight";

// ICONS

import { RiDeleteBin6Line } from "react-icons/ri";

interface IPropsTable {
  color?: string;
  weight?: string;
  width?: string;
  bgColor?: string;
}

export const MainContainerDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: 1000;
`;

export const ContainerInputAndButtonNewProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: -100;
  top: 80px;
  gap: 1em;
`;

export const InputSearch = styled.input`
  background-color: ${colors.ligthGray};
  padding: 12px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  width: 770px;
  margin-left: 55px;
  transition: all 0.5s;

  font-size: 1em;
  text-indent: 1rem;

  ::placeholder {
    color: ${colors.darkGrey};
    font-weight: ${weightFonts.w500};
    font-size: 1em;
  }

  :focus {
    background-color: ${colors.focusColor};
  }
`;

export const Table = styled.table`
  z-index: 1000;
  position: fixed;
  top: 150px;
  width: calc(90% - 250px);
  right: 80px;

`;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: ${colors.black};
  width: ${({ width }: IPropsTable) => width || "130px"};
  font-weight: ${weightFonts.w700};
  text-align: left;
`;

export const Td = styled.td`
  color: ${colors.black};
  background-color: ${colors.white};
  width: ${({ width }: IPropsTable) => width || "130px"};
  font-weight: ${weightFonts.w500};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
`;
