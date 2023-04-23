import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// STYLES
import {
  ButtonNewCategory,
  FormControl,
  BtnCloseModal,
  TitleDescriptionCategory,
  ButtonSubmitCategory,
} from "./styles";

// COMPONENTS
import ModalBase from "../ModalBase";
import InputBase from "@src/components/InputBase";
import ToastMessage from "../ToastMessage";

// TYPES
import { ICategory } from "../Types/CategoryTypes";

// SERVICES
import { api } from "@src/services/api";

// SCHEMA
import schemaCreateCategory from "@src/validations/CreateCategoryValidation";

const valuesDefault: ICategory = {
  name: "",
};

const ModalCreateCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICategory>({
    defaultValues: valuesDefault,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schemaCreateCategory),
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSubmitCategoryData: SubmitHandler<ICategory> = async (data) => {
    try {
      const response = await api.post("/category", data);
      ToastMessage(response.data.message, "success");
      console.log(data);
      return response.data;
    } catch (err: any) {
      ToastMessage(err.response.data.message, "error");
    }
  };

  return (
    <>
      <ButtonNewCategory onClick={() => handleOpen()}>
        Nova Categoria
      </ButtonNewCategory>
      {open ? (
        <ModalBase isVisible={open}>
          <BtnCloseModal onClick={() => setOpen(false)} />
          <FormControl onSubmit={handleSubmit(handleSubmitCategoryData)}>
            <TitleDescriptionCategory>
              Cadastro de Categoria
            </TitleDescriptionCategory>

            <InputBase
              label="Nome da Categoria"
              width="500px"
              placeholder="Digite o nome da categoria...."
              error={errors.name}
              {...register("name")}
            />

            {isSubmitting ? (
              <ButtonSubmitCategory bgColor="#4BB543">
                Cadastrando...
              </ButtonSubmitCategory>
            ) : (
              <ButtonSubmitCategory>Cadastrar</ButtonSubmitCategory>
            )}
          </FormControl>
        </ModalBase>
      ) : (
        false
      )}
    </>
  );
};

export default ModalCreateCategory;
