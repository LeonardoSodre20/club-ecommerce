import { useState } from "react";
import { IPropsModalComponent, IPropsProduct } from "./types";
import InputBase from "../../InputBase";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "../../../validations/Products";
import {
  BtnCloseModal,
  ButtonNewProduct,
  ButtonSubmitProducts,
  FormControl,
  ModalComponent,
  ModalForegroundComponent,
  SelectProducts,
  TitleDescriptionModal,
} from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const defaultValues: IPropsProduct = {
  name: "",
  weight: null,
  status: "",
  price: null,
};

const ModalNewProduct = ({ textButton }: IPropsModalComponent) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IPropsProduct>({
    mode: "onSubmit",
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(schemaProduct),
  });

  const onSubmit: SubmitHandler<IPropsProduct> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3333/product", data);
      setOpen(false);
      return toast.success(response?.data.message);
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
                label="Peso do Produto"
                placeholder="Digite o peso do produto..."
                {...register("weight")}
                error={errors.weight}
              />

              <SelectProducts {...register("status")}>
                <option value="">Selecione...</option>
                <option value="Disponível">Disponível</option>
                <option value="Indisponível">Indisponível</option>
              </SelectProducts>

              <InputBase
                type="number"
                width="600px"
                label="Preço do Produto"
                placeholder="Digite o preço do produto..."
                {...register("price")}
                error={errors.price}
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
