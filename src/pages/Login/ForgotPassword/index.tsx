import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import NavBarSteps from "@src/components/Login/NavBarSteps";
import PinInput from "react-pin-input";

// STYLES
import * as S from "./styles";

// TYPES
import { IPropsReset } from "./types";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IPropsReset>({
    defaultValues: initialValues,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schemaResetPassword),
  });

  const handleRedirectUserForLoginPage = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handlePreviousStep = () => {
    setPagesCount((prev) => prev - 1);
  };

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

  const handleVerifyToken: SubmitHandler<IPropsReset> = async (data) => {
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
      handleRedirectUserForLoginPage();
      return response.data;
    } catch (err: any) {
      return ToastMessage(err.response.data.message, "error");
    }
  };

  return (
    <>
      <Header />

      <S.MainContainerStepsResetPassword>
        <NavBarSteps nextStepsCount={pagesCount} />
        {pagesCount === 0 ? (
          <>
            <S.FormControl
              onSubmit={handleSubmit(handleSubmitEmail)}
              as={motion.form}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", duration: 0.7 }}
            >
              <S.ContainerInfoReset>
                <S.ContainerTitle>
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePreviousStep()}
                    disabled={pagesCount <= 0}
                  >
                    <S.ArrowLeftPreviousStep />
                  </button>
                  <S.TitleMain>Recuperação de senha</S.TitleMain>
                </S.ContainerTitle>
                <S.TextDescriptionReset>
                  Para avançar para as próximas etapas , precisamos do e-mail de
                  cadastro da conta
                </S.TextDescriptionReset>
                <InputBase
                  type="email"
                  label="E-mail"
                  width="500px"
                  placeholder="Digite seu e-mail..."
                  error={errors.email}
                  {...register("email")}
                />
              </S.ContainerInfoReset>
              <S.ButtonNextStep type="submit">Enviar</S.ButtonNextStep>
            </S.FormControl>
          </>
        ) : (
          <>
            {pagesCount === 1 ? (
              <>
                <S.FormControl
                  onSubmit={handleSubmit(handleVerifyToken)}
                  as={motion.form}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ease: "linear", duration: 0.7 }}
                >
                  <S.TitleMain>Recuperação de senha</S.TitleMain>
                  <S.ContainerInfoReset>
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
                  </S.ContainerInfoReset>

                  <S.ButtonNextStep type="submit">Enviar</S.ButtonNextStep>
                </S.FormControl>
              </>
            ) : (
              <>
                {pagesCount === 2 ? (
                  <>
                    <S.FormControl
                      onSubmit={handleSubmit(handleSubmitPassword)}
                      as={motion.form}
                      initial={{ opacity: 0, x: 35 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ease: "linear", duration: 0.7 }}
                    >
                      <S.TitleMain>Recuperação de senha</S.TitleMain>
                      <S.ContainerInfoReset>
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
                      </S.ContainerInfoReset>

                      {isSubmitting ? (
                        <S.ButtonNextStep type="submit" bgColor="#4bb543">
                          Cadastrando
                        </S.ButtonNextStep>
                      ) : (
                        <S.ButtonNextStep type="submit">
                          Cadastrar
                        </S.ButtonNextStep>
                      )}
                    </S.FormControl>
                  </>
                ) : null}
              </>
            )}
          </>
        )}
      </S.MainContainerStepsResetPassword>
    </>
  );
};

export default ForgotPasswordStepsToSteps;
