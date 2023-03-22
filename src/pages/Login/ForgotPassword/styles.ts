import styled from "styled-components";

// ICONS

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

export const MainContainerStepsResetPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const ContainerInfoReset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonNextStep = styled.button`
  width: 250px;
  margin-top: 17px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.black};
  font-size: 1em;
  font-weight: ${weightFonts.w700};
  color: ${colors.white};
  padding: 0.8rem;
  cursor: pointer;
`;
