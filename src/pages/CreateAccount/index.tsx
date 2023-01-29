import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import InputBase from "../../components/InputBase";
import schemaCreateAccount from "../../validations/CreateUserValidation";
import {
  ButtonCreateAccount,
  ContainerInputsForms,
  ContainerMainAccount,
  FormControl,
  TitleFormMain,
} from "./styles";

interface IPropsInputsCreateAccount {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const valuesDefault: IPropsInputsCreateAccount = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPropsInputsCreateAccount>({
    mode: "onSubmit",
    defaultValues: valuesDefault,
    resolver: yupResolver(schemaCreateAccount),
    shouldFocusError: true,
  });
  const onSubmit: SubmitHandler<IPropsInputsCreateAccount> = (data) =>
    console.log(data);

  return (
    <>
      <Header />
      <ContainerMainAccount>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <TitleFormMain>Crie sua conta</TitleFormMain>

          <ContainerInputsForms>
            <InputBase
              label="Nome"
              width="500px"
              placeholder="Digite seu nome..."
              error={errors.name}
              {...register("name")}
            />

            <InputBase
              label="Sobrenome"
              width="500px"
              placeholder="Digite seu sobrenome..."
              error={errors.lastname}
              {...register("lastname")}
            />

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

            <InputBase
              type="password"
              label="Confirmação de senha"
              width="500px"
              placeholder="Confirme ssua senha..."
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />
          </ContainerInputsForms>

          <ButtonCreateAccount type="submit">Criar conta</ButtonCreateAccount>
        </FormControl>
      </ContainerMainAccount>
    </>
  );
};

export default CreateAccount;
