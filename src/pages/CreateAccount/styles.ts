import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

interface IPropsButtonCreateAccount {
  bgColor?: string;
}

export const ContainerMainAccount = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

export const FormControl = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
  animation: fadeForms 1s normal;

  @keyframes fadeForms {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const TitleFormMain = styled.h1`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  text-align: center;
  width: 90%;
  font-size: 1.2em;

  padding: 0.5rem;
  border-bottom: 1px solid ${colors.darkGrey};
`;

export const ContainerInputsForms = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

export const ButtonCreateAccount = styled.button`
  margin-top: 30px;
  color: ${colors.white};
  font-weight: ${weightFonts.w600};
  font-size: 1.1em;
  background-color: ${({ bgColor }: IPropsButtonCreateAccount) =>
    bgColor || `${colors.buttonDefault}`};

  border-radius: 0.5rem;
  width: 500px;
  padding: 12px 8px;
  transition: all 0.5s;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    background-color: ${colors.focusColor};
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
`;
