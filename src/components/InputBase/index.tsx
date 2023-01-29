import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import TooltipError from "../Tooltips/ErrorTooltip";

import {
  ContainerInput,
  ContainerInputWithType,
  IconEyeInvisible,
  IconEyeVisible,
  Input,
  Label,
} from "./styles";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label: string;
  type?: string;
  width?: string;
}

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
      ) : (
        ""
      )}
    </ContainerInput>
  );
};

export default forwardRef(InputBase);
