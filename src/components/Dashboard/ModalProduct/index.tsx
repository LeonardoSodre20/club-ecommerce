import { useState } from "react";
import { IPropsModalComponent, IPropsProduct } from "./types";
import InputBase from "../../InputBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "../../../validations/Products";
import toast from "react-hot-toast";
import { api } from "../../../services/api";
import { formatCurrency } from "../../../utils/currencyMask";
import {
  BtnCloseModal,
  ButtonNewProduct,
  ButtonSubmitProducts,
  ContainerSelect,
  FormControl,
  LabelSelect,
  ModalComponent,
  ModalForegroundComponent,
  SelectProducts,
  TitleDescriptionModal,
} from "./styles";

const defaultValues: IPropsProduct = {
  name: "",
  amount: null,
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
      const response = await api.post("/product", data);
      setOpen(false);
      getAllProductsRefresh();
      return toast.success(response?.data.message, {
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      });
    } catch (err: any) {
      return toast.error(err.response?.data?.message);
    }
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
        <ModalForegroundComponent>
          <ModalComponent>
            <BtnCloseModal onClick={() => setOpen(false)} />
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <TitleDescriptionModal>
                Cadastro de Produtos
              </TitleDescriptionModal>

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
                {...register("amount")}
                error={errors.amount}
              />

              <ContainerSelect>
                <LabelSelect>Status do Produto</LabelSelect>
                <SelectProducts {...register("status")}>
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
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                  setValue("price", formatCurrency(ev.target.value));
                }}
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
          </ModalComponent>
        </ModalForegroundComponent>
      ) : (
        false
      )}
    </>
  );
};

export default ModalNewProduct;
