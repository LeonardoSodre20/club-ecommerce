import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// STYLES
import {
  ButtonNewCategory,
  FormControl,
  BtnCloseModal,
  TitleDescriptionCategory,
  ButtonSubmitCategory,
  UploadButtonContainer,
  InputButtonUpload,
  UploadIcon,
} from "./styles";

// COMPONENTS
import ModalBase from "../ModalBase";
import InputBase from "@src/components/InputBase";

// TYPES
import { ICategory } from "../Types/CategoryTypes";

// SCHEMA
import schemaCreateCategory from "@src/validations/CreateCategoryValidation";
import providerCategories from "@src/providers/Categories/provider.categories";
import { useMutation, useQueryClient } from "react-query";

const valuesDefault: ICategory = {
  name: "",
  image: null,
};

const ModalCreateCategory = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ICategory>({
    defaultValues: valuesDefault,
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: yupResolver(schemaCreateCategory),
  });

  const values = watch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const createCategory: any = useMutation({
    mutationFn: () => {
      return providerCategories.handleCreateNewCategory({
        name: values.name,
        image: file,
      });
    },
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["categoriesAdmin"] });
    },
  });
  return (
    <>
      <ButtonNewCategory onClick={() => handleOpen()}>
        Nova Categoria
      </ButtonNewCategory>
      {open ? (
        <ModalBase isVisible={open}>
          <BtnCloseModal onClick={() => setOpen(false)} />
          <FormControl onSubmit={handleSubmit(createCategory.mutate)}>
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

            <UploadButtonContainer htmlFor="upload-input">
              <UploadIcon />
              {file?.name ?? "Insira uma imagem"}
            </UploadButtonContainer>
            <InputButtonUpload
              accept="image/*"
              name="upload-input"
              type="file"
              id="upload-input"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
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
