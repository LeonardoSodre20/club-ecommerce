import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";

// STYLES
import * as S from "./styles";

// HOOKS
import useForm from "@src/hooks/useForm";

const Login = () => {
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState<string>("password");

  const {
    handleSubmit,
    handleLoginSubmit,
    register,
    setValue,
    errors,
    isSubmitting,
  } = useForm();

  return (
    <>
      <Header />
      <S.ContainerMainLogin>
        <S.ContainerMainInfo>
          <S.TitleMainLogin>Entre com sua conta</S.TitleMainLogin>
          <S.ButtonLogin>
            <S.IconGoogle />
            <S.TextButton>Entre com o google</S.TextButton>
          </S.ButtonLogin>
          <S.SubDescriptionLogin>
            ou entre com o seu e-mail
          </S.SubDescriptionLogin>
        </S.ContainerMainInfo>

        <S.FormControlLogin onSubmit={handleSubmit(handleLoginSubmit)}>
          <InputBase
            label="E-mail"
            width="500px"
            placeholder="Digite seu e-mail..."
            error={errors.email}
            {...register("email")}
            onPaste={(e) => {
              setValue("email", e.clipboardData.getData("text/plain").trim());
            }}
          />
          <InputBase
            type={typeInput}
            label="Senha"
            width="500px"
            placeholder="Digite sua senha..."
            error={errors.password}
            {...register("password")}
            iconRight={() =>
              typeInput.includes("password") ? (
                <S.IconEyeInvisible onClick={() => setTypeInput("text")} />
              ) : (
                <S.IconEyeVisible onClick={() => setTypeInput("password")} />
              )
            }
            onPaste={(e) => {
              setValue(
                "password",
                e.clipboardData.getData("text/plain").trim()
              );
            }}
          />

          <S.ContainerInfoHelp>
            <p onClick={() => navigate("/resetPassword")}>
              Esqueceu sua senha ? Clique aqui !
            </p>
          </S.ContainerInfoHelp>

          {isSubmitting ? (
            <S.ButtonLogin type="submit" bgColorButton="#4bb543">
              Entrando...
            </S.ButtonLogin>
          ) : (
            <S.ButtonLogin type="submit">Entrar</S.ButtonLogin>
          )}
        </S.FormControlLogin>
      </S.ContainerMainLogin>
    </>
  );
};

export default Login;
