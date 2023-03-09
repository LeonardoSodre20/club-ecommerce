import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  bottom: 5px;
`;

export const ButtonControlPage = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${colors.black};
  border-radius: 30%;
  font-size: 1em;
  padding: 0.5rem;
  border: none;
`;
