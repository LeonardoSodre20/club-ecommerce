import styled from "styled-components";
import { colors } from "../../../styles/colors";

// TYPES
import { IPropsTableDefault } from "../Types/TablesTypes";

export const Table = styled.table`
  margin-top: 70px;
  margin-left: 40px;
  border-collapse: collapse;
  width: 85%;
  top: 145px;
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

export const THead = styled.thead`
  background-color: ${colors.black};
  width: 100%;
`;

export const Tr = styled.tr`
  width: 100%;
`;

export const Th = styled.th`
  color: ${colors.white};
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
