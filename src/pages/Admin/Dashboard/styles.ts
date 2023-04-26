import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { weightFonts } from "../../../styles/weight";

// ICONS

import { RiDeleteBin6Line } from "react-icons/ri";

interface IPropsTable {
  color?: string;
  weight?: string;
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
  border-collapse: collapse;
  width: 100%;
  position: absolute;
  animation: fadeInTable 1s;

  @keyframes fadeInTable {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Th = styled.th`
  color: ${colors.white};
  font-size: 1em;
  text-align: center;
  padding: 0.6rem;
  width: 180px;
`;

export const Td = styled.td`
  color: ${({ color }: IPropsTable) => color || `${colors.black}`};
  font-size: 0.8em;
  text-align: center;
  padding: 0.3rem;
  width: 180px;
  font-weight: ${({ weight }: IPropsTable) => weight || "200"};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const IconDelete = styled(RiDeleteBin6Line)`
  color: ${colors.black};
  font-size: 2.5em;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.2rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
