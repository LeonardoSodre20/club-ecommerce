import * as Yup from "yup";

const schemaProduct = Yup.object({
  name: Yup.string().required("O nome do produto é obrigatório !"),
  quantity: Yup.number()
    .typeError("Somente números são aceitos !")
    .required("A quantidade do produto é obrigatório !")
    .nullable(),
  status: Yup.string().required("O status do produto é obrigatório !"),
  price: Yup.string().required("O preço do produto é obrigatório !").nullable(),
  categoryName: Yup.string().required("O nome da categoria é obrigatório !"),
});

export default schemaProduct;
