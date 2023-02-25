import React, { useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import { IProducts } from "./types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ModalNewProduct from "../../../components/Dashboard/ModalProduct";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

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
} from "./styles";
import AccountButton from "../../../components/AccountLogout";

const Dashboard = () => {
  const [products, setProducts] = useState<IProducts[]>();
  const [search, setSearch] = useState<string>("");

  // PRODUTOS FILTRADOS POR STATUS , NOME e DATA DE CADASTRO
  const filteredProducts = products?.filter((attr) => {
    return (
      attr.status.includes(search) ||
      attr.name.includes(search) ||
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
          marginBottom: "250px",
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
            {filteredProducts?.map((prod) => {
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
    </MainContainerDashboard>
  );
};

export default Dashboard;
