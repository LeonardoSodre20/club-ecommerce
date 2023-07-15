import { ChangeEvent } from "react";

// HOOKS
import useProduct from "@src/hooks/useProduct";
import useCategory from "@src/hooks/useCategory";

// FORMATTERS
import { formatCurrency } from "@src/utils/masks";

// STYLES
import * as S from "./styles";

// TYPES
import { IPropsModalComponent } from "./types";

// COMPONENTS
import InputBase from "@src/components/InputBase";
import ModalBase from "../ModalBase";
import TooltipError from "@src/components/Tooltips/ErrorTooltip";
import FormControlGeneric from "../ModalBase/FormControl";

const ModalNewProduct = ({ textButton }: IPropsModalComponent) => {
  const {
    setValue,
    handleSubmit,
    errors,
    setOpen,
    open,
    handleClearValuesAndErrorsForms,
    register,
    handleCreateProduct,
    setImage,
    isSubmitting,
  } = useProduct();

  const { data } = useCategory();

  const handleFormatCurrency = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setValue("price", formatCurrency(value));
  };

  return (
    <>
      <S.ButtonNewProduct
        onClick={() => {
          setOpen(!open);
        }}
      >
        {textButton}
      </S.ButtonNewProduct>
      {open ? (
        <ModalBase isVisible={open}>
          <S.BtnCloseModal
            onClick={() => {
              setOpen(false);
              handleClearValuesAndErrorsForms();
            }}
          />
          <FormControlGeneric onSubmit={handleSubmit(handleCreateProduct)}>
            <S.TitleDescriptionModal>
              Cadastro de Produtos
            </S.TitleDescriptionModal>

            <InputBase
              width="600px"
              label="Nome do Produto"
              placeholder="Digite o nome do produto..."
              {...register("name")}
              error={errors.name}
            />
            <InputBase
              width="600px"
              label="Quantidade do Produto"
              placeholder="Digite o peso do produto..."
              error={errors.quantity}
              {...register("quantity")}
            />

            <S.ContainerSelect>
              <S.LabelSelect>Status do Produto</S.LabelSelect>
              <S.SelectProducts
                {...register("status")}
                placeholder="Selecione..."
              >
                <option value="">Selecione...</option>
                <option value="Disponível">Disponível</option>
                <option value="Indisponível">Indisponível</option>
              </S.SelectProducts>

              {errors?.status && (
                <TooltipError>{errors?.status?.message}</TooltipError>
              )}
            </S.ContainerSelect>
            <InputBase
              type="text"
              width="600px"
              label="Preço do Produto"
              placeholder="Digite o preço do produto..."
              {...register("price")}
              error={errors.price}
              onChange={(ev) => handleFormatCurrency(ev)}
            />

            <S.ContainerSelect>
              <S.LabelSelect>Categoria do Produto</S.LabelSelect>
              <S.SelectProducts
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
              </S.SelectProducts>

              {errors?.status && (
                <TooltipError>{errors?.categoryName?.message}</TooltipError>
              )}
            </S.ContainerSelect>

            <S.InputUploadPicture
              htmlFor="inputImage"
              placeholder="Insira a imagem aqui"
            >
              Insira uma imagem...
            </S.InputUploadPicture>
            <S.InputContainer
              type="file"
              id="inputImage"
              name="inputImage"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target && e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />

            <S.ButtonNewProduct
              type="submit"
              color={isSubmitting ? "#4BB543" : ""}
            >
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </S.ButtonNewProduct>
          </FormControlGeneric>
        </ModalBase>
      ) : (
        false
      )}
    </>
  );
};

export default ModalNewProduct;
