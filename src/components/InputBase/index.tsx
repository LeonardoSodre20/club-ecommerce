import { InputHTMLAttributes, useState } from "react";
import {
  ContainerInput,
  ContainerInputWithType,
  IconEyeInvisible,
  IconEyeVisible,
  Input,
  Label,
  MessageError,
} from "./styles";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  type?: string;
  width?: string;
}

const InputBase = ({ error, label, type, width, ...rest }: IPropsInput) => {
  const [typeInput, setTypeInput] = useState<string>("password");
  return (
    <ContainerInput>
      <Label>{label}</Label>
      {type === "password" ? (
        <ContainerInputWithType>
          <Input type={typeInput} {...rest} width={width} />
          {typeInput === "password" ? (
            <IconEyeInvisible onClick={() => setTypeInput("text")} />
          ) : (
            <IconEyeVisible onClick={() => setTypeInput("password")} />
          )}
        </ContainerInputWithType>
      ) : (
        <Input type={type} {...rest} width={width} />
      )}
      <MessageError>{error}</MessageError>
    </ContainerInput>
  );
};

export default InputBase;
