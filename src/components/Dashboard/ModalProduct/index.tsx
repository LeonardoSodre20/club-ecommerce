import { ChangeEvent, useState } from "react";
import InputBase from "../../InputBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "../../../validations/Products";
import toast from "react-hot-toast";
import { api } from "../../../services/api";
import { formatCurrency } from "../../../utils/currencyMask";

// STYLES
import {
  BtnCloseModal,
  ButtonNewProduct,
  ButtonSubmitProducts,
  ContainerSelect,
  FormControl,
  InputUploadPicture,
  LabelSelect,
  ModalComponent,
  ModalForegroundComponent,
  SelectProducts,
  TitleDescriptionModal,
} from "./styles";

// TYPES
import { IPropsModalComponent, IPropsProduct } from "./types";
import { AxiosResponse } from "axios";

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
  const [fileImage, setFileImage] = useState<any>();
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
      const response: AxiosResponse = await api.post<IPropsProduct>(
        "/product",
        data
      );
      setOpen(false);
      getAllProductsRefresh();
      return toast.success(response.data.message, {
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      });
    } catch (err: any) {
      return toast.error(err.response?.data?.message);
    }
  };

  const handleUploadImageProduct = async () => {
    const formData = new FormData();
    formData.append("fileImage", fileImage);

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response: AxiosResponse = await api.post(
        "/product/upload",
        formData,
        headers
      );
      return response.data;
    } catch (err) {
      console.log(err);
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

              <input
                type="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFileImage(e.target.files)
                }
              />
              <button type="button" onClick={() => handleUploadImageProduct()}>
                Enviar Imagem
              </button>
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
