import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";
import { BsGoogle } from "react-icons/bs";

interface IPropsLoginStyles {
  bgColorButton?: string;
}

export const ContainerMainLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  animation: fadeFormsLogin 1s normal;

  @keyframes fadeFormsLogin {
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

export const ContainerMainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.1em;

  width: 550px;
`;

export const TitleMainLogin = styled.h1`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  text-align: center;
  width: 100%;
  font-size: 1.2em;
  padding: 0.5rem;
`;

export const TextButton = styled.p`
  color: ${colors.white};
  font-weight: ${weightFonts.w600};
  font-size: 1.1em;
`;

export const ButtonLogin = styled.button`
  color: ${colors.white};
  font-weight: ${weightFonts.w600};
  font-size: 1.1em;
  background-color: ${({ bgColorButton }: IPropsLoginStyles) =>
    bgColorButton || `${colors.buttonDefault}`};

  border-radius: 0.5rem;
  width: 500px;
  padding: 12px 8px;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.5s;
  border: 1px solid transparent;

  :hover {
    background-color: ${colors.focusColor};
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
`;

export const SubDescriptionLogin = styled.p`
  font-weight: ${weightFonts.w500};
  font-size: 1.2em;
  color: ${colors.black};

  padding: 8px 0;
  border-bottom: 1px solid ${colors.darkGrey};
  text-align: center;
  width: 90%;
`;

// Formulário

export const FormControlLogin = styled.form`
  margin-top: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.8em;
`;

export const IconGoogle = styled(BsGoogle)`
  font-size: 1.2em;
  color: ${colors.white};
`;
