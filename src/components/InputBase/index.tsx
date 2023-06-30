import { forwardRef, ForwardRefRenderFunction } from "react";

// COMPONENTS
import TooltipError from "../Tooltips/ErrorTooltip";

// STYLES
import * as S from "./styles";

// TYPES
import { IPropsInput } from "./types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IPropsInput> = (
  { error, label, type = "text", width, iconRight, ...rest },
  ref
) => {
  return (
    <S.ContainerInput>
      <S.Label>{label}</S.Label>
      <S.Input type={type} width={width} ref={ref} {...rest} />
      <>{iconRight && iconRight()}</>
      {error && error.message ? (
        <TooltipError>{error.message}</TooltipError>
      ) : null}
    </S.ContainerInput>
  );
};

export default forwardRef(InputBase);
