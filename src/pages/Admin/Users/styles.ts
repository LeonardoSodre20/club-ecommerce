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
  background: rgb(86, 79, 199);
  background: linear-gradient(
    65deg,
    rgba(86, 79, 199, 1) 0%,
    rgba(60, 50, 142, 1) 35%,
    rgba(37, 21, 96, 1) 100%
  );
`;

export const Td = styled.td`
  background-color: #4830a0;
  color: ${colors.white};
  font-size: 0.8em;
  text-align: center;
  padding: 0.6rem;
  width: 180px;
  font-weight: ${({ weight }: IPropsTableDefault) => weight || "600"};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
