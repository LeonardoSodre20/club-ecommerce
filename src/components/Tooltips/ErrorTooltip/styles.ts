import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { weightFonts } from "../../../styles/weight";

export const ContainerTooltipError = styled.div`
  background-color: ${colors.red};
  padding: 8px 5px;
  border-radius: 0.5rem;
  color: ${colors.white};
  font-size: 0.7em;
  font-weight: ${weightFonts.w700};
  width: 230px;
  position: absolute;
  right: -200px;
  top: -38px;
  text-align: center;
  animation: scaleTooltipError 0.7s normal;

  @keyframes scaleTooltipError {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
