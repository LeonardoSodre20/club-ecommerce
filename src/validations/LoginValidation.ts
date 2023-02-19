import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string()
    .email("Por favor, digite um e-mail válido !")
    .required("O campo e-mail é obrigatório !"),
  password: Yup.string()
    .required("O campo senha é obrigatório !")
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

export default schema;
