import { colors } from "@src/styles/colors";
import styled from "styled-components";

export const MainContainerCategories = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 1.5em;
  flex-wrap: wrap;
`;

export const ContainerCards = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 1.5em;
  flex-wrap: wrap;
`;

export const ContainerCardCategory = styled.div`
  height: 300px;
  width: 600px;
  opacity: 80%;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  // ALIGN
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    color: ${colors.white};
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
    font-size: 2em;
  }

  // EFFECTS
  :hover {
    opacity: 100%;
    cursor: pointer;
  }
`;
