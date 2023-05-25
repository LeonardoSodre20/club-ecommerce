import { useForm, SubmitHandler } from "react-hook-form";
import schema from "@src/validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";

// STYLES
import {
  ButtonLogin,
  ContainerMainInfo,
  ContainerMainLogin,
  FormControlLogin,
  IconGoogle,
  RedirectResetPasswordSteps,
  SubDescriptionLogin,
  TextButton,
  TitleMainLogin,
} from "./styles";

// HOOKS
import { useAuth } from "@src/hooks/useAuth";

// TYPES
import { IPropsFormsLogin } from "@src/types/Login";
import { useEffect } from "react";

const valuesDefault: IPropsFormsLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const { Login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IPropsFormsLogin>({
    defaultValues: valuesDefault,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });
  const handleLoginSubmit: SubmitHandler<IPropsFormsLogin> = (data) => {
    const { email, password } = data;
    Login(email, password);
    console.log(data);
  };

  return (
    <>
      <Header />
      <ContainerMainLogin>
        <ContainerMainInfo>
          <TitleMainLogin>Entre com sua conta</TitleMainLogin>
          <ButtonLogin>
            <IconGoogle />
            <TextButton>Entre com o google</TextButton>
          </ButtonLogin>
          <SubDescriptionLogin>ou entre com o seu e-mail</SubDescriptionLogin>
        </ContainerMainInfo>

        <FormControlLogin onSubmit={handleSubmit(handleLoginSubmit)}>
          <InputBase
            label="E-mail"
            width="500px"
            placeholder="Digite seu e-mail..."
            error={errors.email}
            {...register("email")}
          />
          <InputBase
            type="password"
            label="Senha"
            width="500px"
            placeholder="Digite sua senha..."
            error={errors.password}
            {...register("password")}
          />

          <RedirectResetPasswordSteps>
            Esqueceu sua senha ?
            <strong onClick={() => navigate("/resetPassword")}>
              Clique aqui.
            </strong>
          </RedirectResetPasswordSteps>

          {isSubmitting ? (
            <ButtonLogin type="submit" bgColorButton="#4bb543">
              Entrando...
            </ButtonLogin>
          ) : (
            <ButtonLogin type="submit">Entrar</ButtonLogin>
          )}
        </FormControlLogin>
      </ContainerMainLogin>
    </>
  );
};

export default Login;
