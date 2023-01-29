import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

export const ContainerMainAccount = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 70px);
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
  width: 100%;
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
  background-color: ${colors.buttonDefault};

  border-radius: 0.5rem;
  width: 500px;
  padding: 12px 8px;
  border: none;
  cursor: pointer;
`;
