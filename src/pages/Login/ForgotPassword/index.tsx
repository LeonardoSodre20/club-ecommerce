import { motion } from "framer-motion";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";

import NavBarSteps from "@src/components/Login/NavBarSteps";
import PinInput from "react-pin-input";

// STYLES
import * as S from "./styles";

// HOOKS
import useRecoverPassword from "@src/hooks/useRecoverPassword";

const ForgotPasswordStepsToSteps = () => {
  const {
    pagesCount,
    handleSubmit,
    handleSubmitEmail,
    handlePreviousStep,
    handleVerifyToken,
    handleSubmitPassword,
    errors,
    register,
    setValue,
    isSubmitting,
  } = useRecoverPassword();

  function verifyStepPasswordReset() {
    switch (pagesCount) {
      case 0:
        return (
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
        );
      case 1:
        return (
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
        );

      case 2:
        return (
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
                <S.ButtonNextStep type="submit">Cadastrar</S.ButtonNextStep>
              )}
            </S.FormControl>
          </>
        );

      default:
        return "";
    }
  }

  return (
    <>
      <Header />

      <S.MainContainerStepsResetPassword>
        <NavBarSteps nextStepsCount={pagesCount} />
        {verifyStepPasswordReset()}
      </S.MainContainerStepsResetPassword>
    </>
  );
};

export default ForgotPasswordStepsToSteps;
