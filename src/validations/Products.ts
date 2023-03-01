import * as Yup from "yup";

const schemaProduct = Yup.object({
  name: Yup.string().required("O nome do produto é obrigatório !"),
  amount: Yup.number().required("O peso do produto é obrigatório !").nullable(),
  status: Yup.string().required("O status do produto é obrigatório !"),
  price: Yup.string().required("O preço do produto é obrigatório !").nullable(),
});

export default schemaProduct;
