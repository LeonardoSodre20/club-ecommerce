import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { IPropsTableDefault } from "../Types/TablesTypes";

export const Table = styled.table`
  margin-left: 40px;
  border-collapse: collapse;
  width: 85%;
  position: fixed;
  top: 170px;
  animation: fadeInTable 1s;
  z-index: 100; // PROVISÒRIO

  @keyframes fadeInTable {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const THead = styled.thead`
  background-color: ${colors.black};
  width: 100%;
`;

export const Tr = styled.tr`
  width: 100%;
`;

export const Th = styled.th`
  color: ${colors.white} !important;
  font-size: 0.9em;
  text-align: center;
  padding: 1rem;
  width: 180px;
`;

export const Td = styled.td`
  color: ${({ color }: IPropsTableDefault) => color || `${colors.black}`};
  font-size: 0.8em;
  text-align: center;
  padding: 0.6rem;
  width: 180px;
  font-weight: ${({ weight }: IPropsTableDefault) => weight || "200"};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;