import { useForm, SubmitHandler } from "react-hook-form";

import schema from "@src/validations/LoginValidation";

import { yupResolver } from "@hookform/resolvers/yup";

// HOOKS
import { useAuth } from "./useAuth";

// TYPES
import { IPropsFormsLogin } from "@src/types/Login";
import { IPropsInputsCreateAccount } from "@src/pages/CreateAccount/types";

const valuesDefault: IPropsFormsLogin = {
  email: "",
  password: "",
};

const userForm = () => {
  const { Login } = useAuth();

  const {
    setValue,
    handleSubmit,
    register,
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
  };

  return {
    handleSubmit,
    handleLoginSubmit,
    setValue,
    register,
    errors,
    isSubmitting,
  };
};

export default userForm;
