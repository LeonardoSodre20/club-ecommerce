import styled from "styled-components";

// ICONS
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

// TYPES
interface IPropsButtonNextSteps {
  bgColor?: string;
}

export const MainContainerStepsResetPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const TitleMain = styled.h1`
  color: ${colors.black};
  font-size: 1.8em;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: center;
  border: none;
  border-bottom: 1px solid ${colors.black};
  width: 100%;
`;

export const FormControl = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.3em;
  height: 350px;
  width: 500px;
`;

export const TextDescriptionReset = styled.p`
  color: ${colors.black};
  font-size: 0.9em;
  font-weight: ${weightFonts.w400};
  text-align: start;
  width: 100%;
  margin: 20px 0;
`;

export const ContainerInfoReset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 2em;
`;

export const ButtonNextStep = styled.button`
  width: 500px;
  margin-top: 17px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ bgColor }: IPropsButtonNextSteps) =>
    bgColor || `${colors.black}`};
  font-size: 1em;
  font-weight: ${weightFonts.w700};
  color: ${colors.white};
  padding: 0.8rem;
  cursor: pointer;
`;

// ICONS
export const ArrowLeftPreviousStep = styled(AiOutlineArrowLeft)`
  background-color: ${colors.black};
  font-size: 2.2em;
  color: ${colors.white};
  border-radius: 50%;
  padding: 0.5rem;
`;

export const ArrowRightNextStep = styled(AiOutlineArrowRight)`
  background-color: ${colors.black};
  font-size: 2.2em;
  color: ${colors.white};
  border-radius: 50%;
  padding: 0.5rem;
`;
