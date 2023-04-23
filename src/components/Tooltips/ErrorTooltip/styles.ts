import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { weightFonts } from "../../../styles/weight";
import { IoMdArrowDropdown } from "react-icons/io";

export const ContainerTooltipError = styled.div`
  background-color: ${colors.red};
  padding: 6px 5px;
  border-radius: 0.5rem;
  color: ${colors.white};
  font-size: 0.7em;
  font-weight: ${weightFonts.w700};
  width: 260px;
  position: absolute;
  right: 12px;
  top: -35px;
  text-align: center;
  animation: scaleTooltipError 0.7s normal;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);

  @keyframes scaleTooltipError {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ArrowTooltip = styled(IoMdArrowDropdown)`
  color: ${colors.red};
  font-size: 3.5em;
  position: absolute;
  bottom: -25px;
  right: 10px;
`;
