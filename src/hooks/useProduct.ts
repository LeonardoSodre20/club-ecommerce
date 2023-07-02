import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "@src/validations/Products";

// PROVIDER
import providerProducts from "@src/providers/Products/provider.products";

// TYPES
import { IProducts } from "@src/pages/Admin/Products/types";
import { IPropsProduct } from "@src/components/Dashboard/ModalCreateProduct/types";

const defaultValues: IPropsProduct = {
  name: "",
  quantity: null,
  status: "",
  price: "",
  image: null,
  categoryName: "",
};

const useProduct = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<IPropsProduct>({
    mode: "onChange",
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(schemaProduct),
  });

  const values = watch();

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

  const { data } = useQuery(["product"], () => {
    return providerProducts.handleGetAllProducts();
  });

  const handleDeleteProductById = useMutation(
    (id: string) => {
      return providerProducts.handleDeleteProductById(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["product"] });
      },
    }
  );

  const handleCreateProduct: any = useMutation<IPropsProduct>({
    mutationFn: () => {
      return providerProducts.handleCreateNewProduct({
        name: values.name,
        quantity: values.quantity,
        status: values.status,
        price: values.price,
        image: image,
        categoryName: values.categoryName,
      });
    },
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["product"] });
      handleClearValuesAndErrorsForms();
    },
  });

  return {
    data,
    handleDeleteProductById,
    handleSubmit,
    clearErrors,
    register,
    setValue,
    errors,
    isSubmitting,
    values,
    setImage,
    setOpen,
    open,
    handleCreateProduct,
    handleClearValuesAndErrorsForms,
  };
};

export default useProduct;
