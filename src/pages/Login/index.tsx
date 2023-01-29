import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../../components/Header";
import InputBase from "../../components/InputBase";
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

const Login = () => {
  const { register, handleSubmit, watch } = useForm<IPropsFormsLogin>();
  const onSubmit: SubmitHandler<IPropsFormsLogin> = (data) => console.log(data);
  const values = watch();

  console.log(values.email);

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
            {...register("email")}
          />
          <InputBase
            type="password"
            label="Senha"
            width="500px"
            placeholder="Digite sua senha..."
            {...register("password")}
          />

          <ButtonLogin>Entrar</ButtonLogin>
        </FormControlLogin>
      </ContainerMainLogin>
    </>
  );
};

export default Login;
