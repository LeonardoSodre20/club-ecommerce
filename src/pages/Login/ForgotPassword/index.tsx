import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import NavBarSteps from "@src/components/Login/NavBarSteps";
import PinInput from "react-pin-input";

// STYLES
import {
  ButtonNextStep,
  ContainerInfoReset,
  FormControl,
  MainContainerStepsResetPassword,
  TextDescriptionReset,
} from "./styles";

// TYPES
import { IPropsReset } from "@src/intefaces/ResetPassword";

// SERVICES
import { api } from "@src/services/api";

// SCHEMA
import schemaResetPassword from "@src/validations/ResetPasswordValidation";

const initialValues: IPropsReset = {
  email: "",
  token: "",
  password: "",
};

const ForgotPasswordStepsToSteps = () => {
  const [pagesCount, setPagesCount] = useState<number>(0);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IPropsReset>({
    defaultValues: initialValues,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schemaResetPassword),
  });

  const handleSubmitEmail: SubmitHandler<IPropsReset> = async (data) => {
    try {
      const { email } = data;
      const response = await api.post("/auth/forgot", {
        email: email,
      });
      ToastMessage(response.data.message, "success");
      setPagesCount(pagesCount + 1);
      return response;
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

  const handleSubmitToken: SubmitHandler<IPropsReset> = async (data) => {
    const { token } = data;
    const email = getValues("email");

    try {
      const response = await api.post("/auth/token", {
        email,
        token,
      });
      ToastMessage(response.data.message, "success");
      setPagesCount(pagesCount + 1);
      return response;
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

  const handleSubmitPassword: SubmitHandler<IPropsReset> = async (data) => {
    const email = getValues("email");
    const { password } = data;

    try {
      const response = await api.post("/auth/reset", {
        email: email,
        password: password,
      });
      ToastMessage(response.data.message, "success");
      return response.data;
    } catch (err: any) {
      return ToastMessage(err.response.data.message, "error");
    }
  };

  return (
    <>
      <Header />

      <MainContainerStepsResetPassword>
        <NavBarSteps nextStepsCount={pagesCount} />
        {pagesCount === 0 ? (
          <>
            <FormControl onSubmit={handleSubmit(handleSubmitEmail)}>
              <ContainerInfoReset>
                <TextDescriptionReset>
                  Para avançar para as próximas etapas , precisamos do e-mail de
                  cadastro da conta
                </TextDescriptionReset>
                <InputBase
                  type="email"
                  label="E-mail"
                  width="500px"
                  placeholder="Digite seu e-mail..."
                  error={errors.email}
                  {...register("email")}
                />
              </ContainerInfoReset>
              <ButtonNextStep type="submit">Enviar</ButtonNextStep>
            </FormControl>
          </>
        ) : (
          <>
            {pagesCount === 1 ? (
              <>
                <FormControl onSubmit={handleSubmit(handleSubmitToken)}>
                  <ContainerInfoReset>
                    <PinInput
                      secret
                      type="custom"
                      length={8}
                      inputStyle={{
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "7px",
                      }}
                      autoSelect={true}
                      onChange={(e) => {
                        setValue("token", e);
                      }}
                    />
                  </ContainerInfoReset>

                  <ButtonNextStep type="submit">Enviar</ButtonNextStep>
                </FormControl>
              </>
            ) : (
              <>
                {pagesCount === 2 ? (
                  <>
                    <FormControl onSubmit={handleSubmit(handleSubmitPassword)}>
                      <ContainerInfoReset>
                        <InputBase
                          type="password"
                          label="Nova senha"
                          width="500px"
                          placeholder="Digite sua nova senha...."
                          {...register("password")}
                        />
                        <InputBase
                          type="password"
                          label="Confirmação de senha"
                          width="500px"
                          placeholder="Confirme sua nova senha..."
                        />
                      </ContainerInfoReset>

                      <ButtonNextStep type="submit">Cadastrar</ButtonNextStep>
                    </FormControl>
                  </>
                ) : null}
              </>
            )}
          </>
        )}
      </MainContainerStepsResetPassword>
    </>
  );
};

export default ForgotPasswordStepsToSteps;
