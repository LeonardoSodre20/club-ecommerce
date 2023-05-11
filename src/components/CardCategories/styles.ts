import { colors } from "@src/styles/colors";
import styled from "styled-components";

export const MainContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  filter: opacity(85%);
  transition: 0.5s;

  :hover {
    filter: opacity(100%);
  }

  background-color: ${colors.ligthGray};
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  height: 300px;
  width: 650px;
`;

export const TitleCategory = styled.h1`
  color: ${colors.white};
  font-size: 1.5em;
`;
