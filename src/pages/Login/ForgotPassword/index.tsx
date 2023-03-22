import { useForm } from "react-hook-form";
import { ChangeEvent, FormEvent, useState } from "react";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";

// STYLES
import {
  ButtonNextStep,
  ContainerInfoReset,
  MainContainerStepsResetPassword,
} from "./styles";

// TYPES
import { IPropsReset } from "@src/intefaces/ResetPassword";
import { AxiosResponse } from "axios";

// SERVICES
import { api } from "@src/services/api";

const ForgotPasswordStepsToSteps = () => {
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const handleChangeEmailValue = (ev: ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };

  const handleSubmitEmail = async () => {
    try {
      const response: AxiosResponse = await api.post("/auth/forgot", email);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      <MainContainerStepsResetPassword>
        {pagesCount === 0 ? (
          <ContainerInfoReset>
            <form onSubmit={handleSubmitEmail}>
              <InputBase
                label="E-mail"
                width="500px"
                placeholder="Digite seu e-mail"
                onChange={(e) => handleChangeEmailValue(e)}
              />

              <ButtonNextStep
                onClick={(e: FormEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                }}
                type="submit"
              >
                Enviar
              </ButtonNextStep>
            </form>
          </ContainerInfoReset>
        ) : null}
      </MainContainerStepsResetPassword>
    </>
  );
};

export default ForgotPasswordStepsToSteps;
