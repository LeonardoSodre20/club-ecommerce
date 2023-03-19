import { ChangeEvent, useState } from "react";
import InputBase from "../../InputBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "../../../validations/Products";
import toast from "react-hot-toast";
import { api } from "@src/services/api";

// FORMATTERS
import { formatCurrency } from "@src/utils/currencyMask";
import ToastMessage from "../ToastMessage";

// STYLES
import {
  BtnCloseModal,
  ButtonNewProduct,
  ButtonSubmitProducts,
  ContainerSelect,
  FormControl,
  LabelSelect,
  SelectProducts,
  TitleDescriptionModal,
} from "./styles";

// TYPES
import { IPropsModalComponent, IPropsProduct } from "./types";
import ModalBase from "../ModalBase";

const defaultValues: IPropsProduct = {
  name: "",
  quantity: null,
  status: "",
  price: "",
};

const ModalNewProduct = ({
  textButton,
  getAllProductsRefresh,
}: IPropsModalComponent) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IPropsProduct>({
    mode: "onSubmit",
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(schemaProduct),
  });

  const onSubmit: SubmitHandler<IPropsProduct> = async (data) => {
    try {
      await api.post("/product", data);
      setOpen(false);
      getAllProductsRefresh();
      setValue("name", "");
      setValue("quantity", null);
      setValue("status", "");
      setValue("price", "");
      ToastMessage("Producto criado com sucesso !", "success");
    } catch (err: any) {
      ToastMessage(err.response?.data?.message, "error");
    }
  };

  const handleFormatCurrency = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setValue("price", formatCurrency(value));
  };

  return (
    <>
      <ButtonNewProduct
        onClick={() => {
          setOpen(!open);
        }}
      >
        {textButton}
      </ButtonNewProduct>
      {open ? (
        <ModalBase>
          <BtnCloseModal onClick={() => setOpen(false)} />
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <TitleDescriptionModal>Cadastro de Produtos</TitleDescriptionModal>

            <InputBase
              width="600px"
              label="Nome do Produto"
              placeholder="Digite o nome do produto..."
              {...register("name")}
              error={errors.name}
            />
            <InputBase
              type="number"
              width="600px"
              label="Quantidade do Produto"
              placeholder="Digite o peso do produto..."
              error={errors.quantity}
              {...register("quantity")}
            />

            <ContainerSelect>
              <LabelSelect>Status do Produto</LabelSelect>
              <SelectProducts
                {...register("status")}
                placeholder="Selecione..."
              >
                <option value="">Selecione...</option>
                <option value="Disponível">Disponível</option>
                <option value="Indisponível">Indisponível</option>
              </SelectProducts>
            </ContainerSelect>
            <InputBase
              type="text"
              width="600px"
              label="Preço do Produto"
              placeholder="Digite o preço do produto..."
              {...register("price")}
              error={errors.price}
              onChange={(ev) => handleFormatCurrency(ev)}
            />

            {isSubmitting ? (
              <ButtonSubmitProducts type="submit" bgColor="#4BB543">
                Cadastrando...
              </ButtonSubmitProducts>
            ) : (
              <ButtonSubmitProducts type="submit">
                Cadastrar
              </ButtonSubmitProducts>
            )}
          </FormControl>
        </ModalBase>
      ) : (
        false
      )}
    </>
  );
};

export default ModalNewProduct;
