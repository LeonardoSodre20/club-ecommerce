import styled from "styled-components";
import { colors } from "../../../styles/colors";

// TYPES
import { IPropsTableDefault } from "../../../components/Dashboard/Types/TablesTypes";

export const MainContainerUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
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
