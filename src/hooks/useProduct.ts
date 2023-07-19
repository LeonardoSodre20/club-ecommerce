import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "@src/validations/Products";

// PROVIDER
import providerProducts from "@src/services/providers/Products/provider.products";

// TYPES
import { IPropsProduct } from "@src/components/Dashboard/ModalCreateProduct/types";
import { IProducts } from "@src/pages/Admin/Products/types";
import { INewProduct } from "@src/types/NewProduct";
import providerCategories from "@src/services/providers/Categories/provider.categories";

const defaultValues: IPropsProduct = {
  name: "",
  quantity: null,
  status: "",
  price: "",
  image: null,
  categoryName: "",
};

const useProduct = () => {
  
  const [pages, setPages] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

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

  const { data: dataAllProducts } = useQuery<IProducts[]>(["product"], () => {
    return providerProducts.handleGetAllProducts(
      pages,
      pageSize,
      search,
      "asc"
    );
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

  const handleCreateProduct: SubmitHandler<INewProduct> = async (data) => {
    try {
      await providerProducts.handleCreateNewProduct({
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
    setPages,
    pageSize,
  };
};

export default useProduct;
