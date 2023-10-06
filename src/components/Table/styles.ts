import styled from "styled-components";
import { weightFonts } from "@src/styles/weight";
import { colors } from "@src/styles/colors";

interface IPropsTable {
  color?: string;
  weight?: string;
  width?: string;
  bgColor?: string;
}

export const Table = styled.table`
  z-index: -99;
  position: fixed;
  top: 150px;
  width: calc(90% - 250px);
  right: 80px;
`;

export const Tr = styled.tr``;

export const Th = styled.th<IPropsTable>`
  color: ${colors.black};
  width: ${({ width }) => width || "130px"};
  font-weight: ${weightFonts.w700};
  text-align: left;
`;

export const Td = styled.td<IPropsTable>`
  color: ${({ color }) => color || `${colors.black}`};
  background-color: ${colors.white};
  width: ${({ width }) => width || "130px"};
  font-weight: ${weightFonts.w400};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
`;
