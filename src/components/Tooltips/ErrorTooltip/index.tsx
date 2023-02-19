import { ReactNode } from "react";
import { ArrowTooltip, ContainerTooltipError } from "./styles";

interface IPropsTooltip {
  children: ReactNode;
}

const TooltipError = ({ children }: IPropsTooltip) => {
  return (
    <ContainerTooltipError>
      <ArrowTooltip />
      {children}
    </ContainerTooltipError>
  );
};

export default TooltipError;
