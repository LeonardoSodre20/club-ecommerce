import React, { ChangeEvent, useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import { IProducts } from "./types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ModalNewProduct from "../../../components/Dashboard/ModalProduct";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
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
  const currentItems = products?.slice(startIndex, endIndex).filter((attr) => {
    return (
      attr.status.includes(search) ||
      attr.name.includes(search) ||
      attr.amount.toString().includes(search) ||
      attr.created_at.includes(search)
    );
  });

  const getAllProducts = async () => {
    const response = await api.get("/product");
    setProducts(response?.data?.products);
  };

  const deleteProductById = async (id: string) => {
    const response = await api.delete(`/product/${id}`);
    setProducts(products?.filter((prod) => prod._id !== id));
    toast.success(response.data.message);
    return response.data;
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <MainContainerDashboard>
      <SideBar />
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
          width: "80%",
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
                  <Td>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(prod.price)}
                  </Td>
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
          <option value={8}>2</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
        </SelectItemsByPage>
      </ContainerInputItemsByPage>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "3px",
          gap: "0.7em",
        }}
      >
        {Array.from(Array(pages), (item: any, index: number) => {
          return (
            <button
              type="button"
              style={{
                position: "absolute",
                fontSize: "0.8em",
                bottom: "15px",
                color: "#fff",
                padding: "0.2rem",
                borderRadius: "30%",
                width: "25px",
                height: "30px",
                border: "none",
                outline: "none",
                fontWeight: "bold",
                backgroundColor: "#000",
                cursor: "pointer",
              }}
              value={index}
              onClick={(ev: any) => {
                setCurrentPage(Number(ev.target.value));
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </MainContainerDashboard>
  );
};

export default Dashboard;
