import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "@src/validations/Products";

// PROVIDER
import productsService from "@src/services/Products/products.service";

// TYPES
import { IPropsProduct } from "@src/components/Dashboard/ModalCreateProduct/types";
import { IProducts } from "@src/pages/Admin/Products/types";
import { INewProduct } from "@src/types/NewProduct";

// HOOKS
import { usePagination } from "./usePagination";

const defaultValues: IPropsProduct = {
  name: "",
  quantity: null,
  status: "",
  price: "",
  image: null,
  categoryName: "",
};

const useProduct = () => {
  const { pages, pageSize, search, setPages } = usePagination();

  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<IPropsProduct>({
    mode: "onChange",
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(schemaProduct),
  });

  const handleClearValuesAndErrorsForms = () => {
    const clearValuesForms = reset({
      name: "",
      quantity: null,
      status: "",
      price: "",
      categoryName: "",
    });

    const clearErrorsForms = clearErrors([
      "name",
      "quantity",
      "status",
      "price",
      "categoryName",
    ]);

    return {
      clearValuesForms,
      clearErrorsForms,
    };
  };

  const { data: dataAllProducts } = useQuery(
    ["product", pages, search],
    () => {
      return productsService.handleGetAllProducts(
        pages,
        pageSize,
        search,
        "asc"
      );
    },
    {
      keepPreviousData: true,
    }
  );

  const handleDeleteProductById = useMutation(
    (id: string) => {
      return productsService.handleDeleteProductById(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["product"] });
      },
    }
  );

  const handleCreateProduct: SubmitHandler<INewProduct> = async (data) => {
    try {
      await productsService.handleCreateNewProduct({
        name: data.name,
        quantity: data.quantity,
        status: data.status,
        price: data.price,
        image: image,
        categoryName: data.categoryName,
      });
      setOpen(false);
      queryClient.invalidateQueries(["product"]);
    } catch (err: any) {
      console.log(err);
    }
  };

  return {
    dataAllProducts,
    handleDeleteProductById,
    handleSubmit,
    clearErrors,
    register,
    setValue,
    errors,
    isSubmitting,
    setImage,
    setOpen,
    open,
    handleCreateProduct,
    handleClearValuesAndErrorsForms,
    pages,
    pageSize,
    setPages,
  };
};

export default useProduct;
