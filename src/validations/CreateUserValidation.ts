import * as Yup from "yup";

const schemaCreateAccount = Yup.object({
  name: Yup.string().required("O nome é obrigatório !"),
  lastname: Yup.string().required("O sobrenome é obrigatório !"),
  email: Yup.string()
    .email("Por favor, digite um e-mail válido !")
    .required("O e-mail é obrigatório !"),
  password: Yup.string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .max(16, "A senha deve conter no máximo 16 caracteres")
    .required("A senha é obrigatória !"),
  confirmPassword: Yup.string()
    .min(8, "A confirmação de senha deve conter no mínimo 8 caracteres")
    .max(16, "A confirmação de senha deve conter no máximo 16 caracteres")
    .required("A senha é obrigatória !")
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais !")
    .test(
      "password",
      "A senha deve possuir no mínimo 8 caracteres, uma letra minúscula e uma letra maiúscula.",
      (value) => {
        if (value) {
          return (
            value.length >= 8 &&
            /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*#-_?&]{8,}$/.test(value)
          );
        }
        return true;
      }
    ),
});

export default schemaCreateAccount;
