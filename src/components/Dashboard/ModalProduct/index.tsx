import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "@src/validations/Products";

// SERVICES
import { api } from "@src/services/api";

// FORMATTERS
import { formatCurrency } from "@src/utils/currencyMask";

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
import {
  ICategoryByProducts,
  IPropsModalComponent,
  IPropsProduct,
} from "./types";

// COMPONENTS
import InputBase from "@src/components/InputBase";
import ModalBase from "../ModalBase";
import TooltipError from "@src/components/Tooltips/ErrorTooltip";

// PROVIDER
import providerProducts from "@src/providers/Products/provider.products";
import providerCategories from "@src/providers/Categories/provider.categories";
import { ICategoryTypes } from "@src/types/CategoriesTypes";

const defaultValues: IPropsProduct = {
  name: "",
  quantity: null,
  status: "",
  price: "",
  categoryName: "",
};

const ModalNewProduct = ({ textButton }: IPropsModalComponent) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IPropsProduct>({
    mode: "onChange",
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(schemaProduct),
  });

  const values = watch();

  const createNewProduct: any = useMutation({
    mutationFn: () => {
      return providerProducts.handleCreateNewProduct({
        name: values.name,
        quantity: Number(values.quantity),
        status: values.status,
        price: values.price,
        categoryName: values.categoryName,
      });
    },
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const handleFormatCurrency = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setValue("price", formatCurrency(value));
  };

  const { data } = useQuery<ICategoryTypes[]>(["categories"], () => {
    return providerCategories.handleGetAllCategories();
  });

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
        <ModalBase isVisible={open}>
          <BtnCloseModal onClick={() => setOpen(false)} />
          <FormControl onSubmit={handleSubmit(createNewProduct.mutate)}>
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

              {errors?.status && (
                <TooltipError>{errors?.status?.message}</TooltipError>
              )}
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

            <ContainerSelect>
              <LabelSelect>Categoria do Produto</LabelSelect>
              <SelectProducts
                {...register("categoryName")}
                placeholder="Selecione..."
              >
                <option value="">Selecione...</option>
                {data?.map((category) => {
                  return (
                    <option key={category?.id} value={category?.name}>
                      {category?.name}
                    </option>
                  );
                })}
              </SelectProducts>

              {errors?.status && (
                <TooltipError>{errors?.categoryName?.message}</TooltipError>
              )}
            </ContainerSelect>

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
