import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../../components/Header";
import InputBase from "../../components/InputBase";
import schema from "../../components/validations/UseValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ButtonLogin,
  ContainerMainInfo,
  ContainerMainLogin,
  FormControlLogin,
  IconGoogle,
  SubDescriptionLogin,
  TextButton,
  TitleMainLogin,
} from "./styles";

interface IPropsFormsLogin {
  email: string;
  password: string;
}

const valuesDefault = {
  email: "",
  password: "",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPropsFormsLogin>({
    defaultValues: valuesDefault,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IPropsFormsLogin> = (data) => console.log(data);

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

        <FormControlLogin onSubmit={handleSubmit(onSubmit)}>
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

          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </FormControlLogin>
      </ContainerMainLogin>
    </>
  );
};

export default Login;
