import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string()
    .email("Por favor, digite um e-mail válido !")
    .required("O campo e-mail é obrigatório !"),
  password: Yup.string().required("O campo senha é obrigatório !"),
});

export default schema;
