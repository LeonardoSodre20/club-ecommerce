import styled from "styled-components";
import { colors } from "../../../styles/colors";

// TYPES
import { IPropsTableDefault } from "../../../components/Dashboard/Types/TablesTypes";

type PropsTable = {
  color?: string;
};

export const MainContainerUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Td = styled.td<IPropsTableDefault>`
  color: ${({ color }: PropsTable) => color || `${colors.black}`};
  font-size: 0.8em;
  text-align: center;
  padding: 0.6rem;
  width: 180px;
  font-weight: ${({ weight }) => weight || "200"};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
