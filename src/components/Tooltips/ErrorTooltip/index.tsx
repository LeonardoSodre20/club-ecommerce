import { ArrowTooltip, ContainerTooltipError } from "./styles";

const TooltipError = ({ children }: any) => {
  return (
    <ContainerTooltipError>
      <ArrowTooltip />
      {children}
    </ContainerTooltipError>
  );
};

export default TooltipError;
