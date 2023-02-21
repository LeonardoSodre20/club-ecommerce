import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import { IProducts } from "./types";
import { format } from "date-fns";
import {
  ButtonNewProduct,
  ContainerInputAndButtonNewProduct,
  InputSearch,
  MainContainerDashboard,
  Table,
  Td,
  Th,
} from "./styles";
import { ptBR } from "date-fns/locale";

const Dashboard = () => {
  const [products, setProduts] = useState<IProducts[]>();

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:3333/product");
    setProduts(response?.data?.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <MainContainerDashboard>
      <SideBar />
      <ContainerInputAndButtonNewProduct>
        <InputSearch type="search" placeholder="Buscar algum produto..." />
        <ButtonNewProduct>Novo Produto</ButtonNewProduct>
      </ContainerInputAndButtonNewProduct>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Table>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>Peso</Th>
              <Th>Status</Th>
              <Th>Preço</Th>
              <Th>Data de Cadastro</Th>
            </tr>
          </thead>

          <tbody>
            {products?.map((prod) => {
              return (
                <tr
                  key={prod._id}
                  style={{
                    backgroundColor: "#f4f4f5",
                  }}
                >
                  <Td>{prod?.name}</Td>
                  <Td>{prod.weight}</Td>
                  <Td>{prod.status}</Td>
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
