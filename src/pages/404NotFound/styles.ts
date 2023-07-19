import styled from "styled-components";

// VARIABLES
import { weightFonts } from "@src/styles/weight";
import { colors } from "@src/styles/colors";

export const ContentMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const ContainerAnimation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3em;
  animation: fadeIn 1.5s normal;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DescriptionData = styled.p`
  color: #898989;
  font-weight: ${weightFonts.w700};
  font-size: 2em;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
`;

export const ButtonRedirect = styled.button`
  background-color: #898989;
  color: ${colors.white};
  font-size: 1.2em;
  font-weight: ${weightFonts.w600};
  padding: 10px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);

  position: absolute;
  left: 0;
  bottom: 145px;
  cursor: pointer;
`;
