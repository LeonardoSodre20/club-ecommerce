import { ReactNode } from "react";
import { ArrowTooltip, ContainerTooltipError } from "./styles";

const TooltipError = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerTooltipError>
      <ArrowTooltip />
      {children}
    </ContainerTooltipError>
  );
};

export default TooltipError;
