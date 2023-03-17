import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import schemaCreateAccount from "@src/validations/CreateUserValidation";

// STYLES
import {
  ButtonCreateAccount,
  ContainerInputsForms,
  ContainerMainAccount,
  FormControl,
  TitleFormMain,
} from "./styles";

// COMPONENTS
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import Header from "@src/components/Header";
import InputBase from "@src/components/InputBase";

// TYPES
import { IPropsInputsCreateAccount } from "./types";

// SERVICES
import { api } from "@src/services/api";

const valuesDefault: IPropsInputsCreateAccount = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState<boolean>(false);

  setTimeout(() => {
    redirect ? navigate("/login") : false;
  }, 2500);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IPropsInputsCreateAccount>({
    mode: "onChange",
    defaultValues: valuesDefault,
    resolver: yupResolver(schemaCreateAccount),
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<IPropsInputsCreateAccount> = async (data) => {
    try {
      const response = await api.post("/users", data);
      setRedirect(!redirect);
      ToastMessage(response.data.message, "success");
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

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
              placeholder="Confirme sua senha..."
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />
          </ContainerInputsForms>

          {isSubmitting ? (
            <ButtonCreateAccount type="submit" bgColor="#4bb543">
              Criando...
            </ButtonCreateAccount>
          ) : (
            <ButtonCreateAccount type="submit">Criar conta</ButtonCreateAccount>
          )}
        </FormControl>
      </ContainerMainAccount>
    </>
  );
};

export default CreateAccount;
