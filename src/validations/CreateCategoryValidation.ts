import * as Yup from "yup";

const schemaCreateCategory = Yup.object({
  name: Yup.string().required("O Nome da categoria é obrigatório !"),
});

export default schemaCreateCategory;
