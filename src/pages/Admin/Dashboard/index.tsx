import React, { ChangeEvent, useEffect, useState } from "react";
import { IProducts } from "./types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import toast from "react-hot-toast";
import { api } from "../../../services/api";
import ModalNewProduct from "../../../components/Dashboard/ModalProduct";
import AccountButton from "../../../components/AccountLogout";

// STYLE
import {
  ContainerInputAndButtonNewProduct,
  IconDelete,
  IconEdit,
  InputSearch,
  MainContainerDashboard,
  Table,
  Td,
  Th,
  SelectItemsByPage,
  ContainerInputItemsByPage,
  LabelInputItems,
} from "./styles";

const Dashboard = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [search, setSearch] = useState<string>("");

  //PAGINAÇÃO
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsByPage, setItemsByPage] = useState<number>(6);
  const pages: number = Math.ceil(products?.length / itemsByPage);
  const startIndex = currentPage * itemsByPage;
  const endIndex = startIndex + itemsByPage;
  const currentItems = products?.slice(startIndex, endIndex);

  const getAllProducts = async () => {
    const response = await api.get("/product", {
      params: { page: currentPage, pageSize: itemsByPage },
    });
    setProducts(response?.data?.products);
  };

  const deleteProductById = async (id: string) => {
    const response = await api.delete(`/product/${id}`);
    setProducts(products?.filter((prod) => prod._id !== id));
    toast.success(response.data.message);
    return response.data;
  };

  const formatCurrecyForBrl = (value: number) => {
    const formatedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatedValue;
  };

  useEffect(() => {
    getAllProducts();
  }, [search]);

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
          getAllProductsRefresh={getAllProducts}
        />
      </ContainerInputAndButtonNewProduct>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "350px",
          marginLeft: "60px",
          position: "relative",
          width: "85%",
        }}
      >
        <Table>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>Quantidade</Th>
              <Th>Status</Th>
              <Th>Preço</Th>
              <Th>Data de Cadastro</Th>
              <Th>Ações</Th>
            </tr>
          </thead>

          <tbody>
            {currentItems?.map((prod) => {
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
                  <Td>
                    {format(new Date(prod.created_at), "dd/MM/yyyy", {
                      locale: ptBR,
                    })}
                  </Td>
                  <Td>
                    <IconEdit />
                    <IconDelete onClick={() => deleteProductById(prod._id)} />
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <ContainerInputItemsByPage>
        <LabelInputItems>Itens por página : </LabelInputItems>
        <SelectItemsByPage
          onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
            setItemsByPage(Number(ev.target.value));
          }}
        >
          <option value={8}>8</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
        </SelectItemsByPage>
      </ContainerInputItemsByPage>
    </MainContainerDashboard>
  );
};

export default Dashboard;
