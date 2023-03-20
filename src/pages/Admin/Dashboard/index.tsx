import React, { useEffect, useState } from "react";
import { api } from "@src/services/api";

// TYPES
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
import ToastMessage from "@src/components/Dashboard/ToastMessage";
import LoaderItems from "@src/components/Loader";
import TableProducts from "@src/components/Dashboard/Table";
import ModalNewProduct from "@src/components/Dashboard/ModalProduct";
import AccountButton from "@src/components/AccountLogout";
import Pagination from "@src/components/Pagination";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";
import { formatDate } from "@src/formatters/dateFormatted";
import { AxiosResponse } from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // PAGINATION
  const productsByPage: number = 8;
  const pages = Math.ceil(products.length / productsByPage);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const startIndex = currentPage * productsByPage;
  const endIndex = startIndex + productsByPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product", {
      params: { pages: pages, limit: productsByPage, search: search },
    });
    setProducts(response?.data?.products);
  };

  const handleDeleteProductById = async (id: string) => {
    const response: AxiosResponse = await api.delete(`/product/${id}`);
    setProducts(products?.filter((prod) => prod.id !== id));
    ToastMessage("Produto deletado com sucesso ", "success");
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

      <TableProducts
        name="Nome do Produto"
        amount="Qtd do produto"
        status="Status"
        price="Preço"
        created_at="Data de Cadastro"
        actions="Ações"
      >
        {isLoading ? (
          <LoaderItems />
        ) : (
          <tbody>
            {paginatedProducts?.map((prod) => {
              return (
                <tr
                  key={prod.id}
                  style={{
                    backgroundColor: "#f4f4f5",
                  }}
                >
                  <Td>{prod?.name}</Td>
                  <Td>{prod.quantity}</Td>
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
                      onClick={() => handleDeleteProductById(prod.id)}
                    />
                  </Td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TableProducts>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </MainContainerDashboard>
  );
};

export default Dashboard;
