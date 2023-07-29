import styled from "styled-components";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

// INTERFACES

interface IPropsStepContainer {
  borderColor?: string;
}

export const ContainerNavBarSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: absolute;
  top: 200px;
`;

export const ContainerStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.2em;
`;

export const StepDescription = styled.p`
  color: ${colors.black};
  font-weight: ${weightFonts.w600};
  font-size: 0.7em;
  padding: 0.3rem;
  border: none;
  border-bottom: 7px solid;
  border-color: ${({ borderColor }: IPropsStepContainer) =>
    borderColor || `${colors.black}`};
`;
