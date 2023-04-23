import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import TooltipError from "../Tooltips/ErrorTooltip";

import {
  ContainerInput,
  ContainerInputWithType,
  IconEyeInvisible,
  IconEyeVisible,
  Input,
  Label,
} from "./styles";

// TYPES
import { IPropsInput } from "./types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IPropsInput> = (
  { error, label, type, width, ...rest },
  ref
) => {
  const [typeInput, setTypeInput] = useState<string>("password");
  return (
    <ContainerInput>
      <Label>{label}</Label>
      {type === "password" ? (
        <ContainerInputWithType>
          <Input type={typeInput} {...rest} width={width} ref={ref} />
          {typeInput === "password" ? (
            <IconEyeInvisible onClick={() => setTypeInput("text")} />
          ) : (
            <IconEyeVisible onClick={() => setTypeInput("password")} />
          )}
        </ContainerInputWithType>
      ) : (
        <Input type={type} {...rest} width={width} ref={ref} />
      )}
      {error && error.message ? (
        <TooltipError>{error.message}</TooltipError>
      ) : null}
    </ContainerInput>
  );
};

export default forwardRef(InputBase);
