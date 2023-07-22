import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import schemaCreateAccount from "@src/validations/CreateUserValidation";

// STYLES
import * as S from "./styles";

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

  const handleSubmitCreateAccount: SubmitHandler<
    IPropsInputsCreateAccount
  > = async (data) => {
    try {
      const response = await api.post("/users", data);
      navigate("/login");
      ToastMessage(response.data.message, "success");
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

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

  return (
    <>
      <Header />
      <S.ContainerMainAccount>
        <S.FormControl onSubmit={handleSubmit(handleSubmitCreateAccount)}>
          <S.TitleFormMain>Crie sua conta</S.TitleFormMain>

          <S.ContainerInputsForms>
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
          </S.ContainerInputsForms>

          {isSubmitting ? (
            <S.ButtonCreateAccount type="submit" bgColor="#4bb543">
              Criando...
            </S.ButtonCreateAccount>
          ) : (
            <S.ButtonCreateAccount type="submit">
              Criar conta
            </S.ButtonCreateAccount>
          )}
        </S.FormControl>
      </S.ContainerMainAccount>
    </>
  );
};

export default CreateAccount;
