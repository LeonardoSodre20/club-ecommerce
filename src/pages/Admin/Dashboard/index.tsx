import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../../services/api";
import { IProducts } from "./types";

// STYLE

import {
  ContainerInputAndButtonNewProduct,
  IconDelete,
  IconEdit,
  InputSearch,
  MainContainerDashboard,
  Td,
} from "./styles";

// COMPONENTS

import LoaderAuth from "../../../components/Loader";
import TableGeneric from "../../../components/Dashboard/Table";
import ModalNewProduct from "../../../components/Dashboard/ModalProduct";
import AccountButton from "../../../components/AccountLogout";
import Pagination from "../../../components/Pagination";

// FORMATTERS

import { formatCurrecyForBrl } from "../../../formatters/currencyFomatted";
import { formatDate } from "../../../formatters/dateFormatted";
import { AxiosResponse } from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // PAGINATION
  const productsByPage: number = 7;
  const pages = Math.ceil(products.length / productsByPage);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const startIndex = currentPage * productsByPage;
  const endIndex = startIndex + productsByPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product", {
      params: { search: search, pageSize: productsByPage },
    });
    setProducts(response?.data?.products);
  };

  const handleDeleteProductById = async (id: string) => {
    const response: AxiosResponse = await api.delete(`/product/${id}`);
    setProducts(products?.filter((prod) => prod._id !== id));
    toast.success(response.data.message, {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });
    return response.data;
  };

  useEffect(() => {
    handleGetAllProducts();
  }, [search]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <MainContainerDashboard>
      <AccountButton />
      <ContainerInputAndButtonNewProduct>
        <InputSearch
          type="search"
          placeholder="Buscar algum produto..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <ModalNewProduct
          textButton="Novo Produto"
          getAllProductsRefresh={handleGetAllProducts}
        />
      </ContainerInputAndButtonNewProduct>

      <TableGeneric
        name="Nome do Produto"
        amount="Qtd do produto"
        status="Status"
        price="Preço"
        created_at="Data de Cadastro"
        actions="Ações"
      >
        {isLoading ? (
          <LoaderAuth />
        ) : (
          <tbody>
            {paginatedProducts?.map((prod) => {
              return (
                <tr
                  key={prod._id}
                  style={{
                    backgroundColor: "#f4f4f5",
                  }}
                >
                  <Td>{prod?.name}</Td>
                  <Td>{prod.amount}</Td>
                  {prod?.status === "Disponível" ? (
                    <Td color="#4BB543" weight="bolder">
                      {prod.status}
                    </Td>
                  ) : (
                    <Td color="#f10000" weight="bolder">
                      {prod.status}
                    </Td>
                  )}
                  <Td>{formatCurrecyForBrl(parseFloat(prod.price))}</Td>
                  <Td>{formatDate(prod.created_at)}</Td>
                  <Td>
                    <IconEdit />
                    <IconDelete
                      onClick={() => handleDeleteProductById(prod._id)}
                    />
                  </Td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TableGeneric>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </MainContainerDashboard>
  );
};

export default Dashboard;
