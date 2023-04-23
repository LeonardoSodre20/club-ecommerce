import * as Yup from "yup";

const schemaResetPassword = Yup.object({
  email: Yup.string()
    .email("Por favor, digite um e-mail válido !")
    .required("O Campo e-mail é obrigatório !"),
});

export default schemaResetPassword;
