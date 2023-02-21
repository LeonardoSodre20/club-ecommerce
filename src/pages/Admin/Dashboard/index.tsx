import { useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import { IProducts } from "./types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ModalNewProduct from "../../../components/Dashboard/ModalProduct";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

// ICONS
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

// STYLE
import {
  ContainerInputAndButtonNewProduct,
  InputSearch,
  MainContainerDashboard,
  Table,
  Td,
  Th,
} from "./styles";

const Dashboard = () => {
  const [products, setProducts] = useState<IProducts[]>();

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
      <ContainerInputAndButtonNewProduct>
        <InputSearch type="search" placeholder="Buscar algum produto..." />
        <ModalNewProduct
          textButton="Novo Produto"
          getAllProductsRefresh={getAllProducts}
        />
      </ContainerInputAndButtonNewProduct>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          marginLeft: "60px",
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
              <Th>Ações</Th>
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
                  <Td onClick={() => deleteProductById(prod._id)}>
                    <FaEdit
                      style={{
                        color: "#000",
                        fontSize: "1.8em",
                        cursor: "pointer",
                      }}
                    />
                    <RiDeleteBin6Line
                      style={{
                        color: "#000",
                        fontSize: "1.8em",
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                      onClick={() => deleteProductById(prod._id)}
                    />
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
