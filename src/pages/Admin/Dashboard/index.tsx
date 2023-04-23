import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { IProducts } from "@src/pages/Admin/Dashboard/types";

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
import TableProducts from "@src/components/Dashboard/Table";
import ModalNewProduct from "@src/components/Dashboard/ModalProduct";
import AccountButton from "@src/components/AccountLogout";
import ModalCreateCategory from "@src/components/Dashboard/ModalCreateCategory";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";
import { formatDate } from "@src/formatters/dateFormatted";

// PROVIDER
import providerProducts from "@src/providers/Products/provider.products";

const Dashboard = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<IProducts[]>(["product"], () => {
    return providerProducts.handleGetAllProducts();
  });

  const deleteProduct = useMutation(
    (id: string) => {
      return providerProducts.handleDeleteProductById(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["product"] });
      },
    }
  );

  return (
    <MainContainerDashboard>
      <AccountButton />
      <ContainerInputAndButtonNewProduct>
        <InputSearch type="search" placeholder="Buscar algum produto..." />
        <ModalNewProduct textButton="Novo Produto" />
        <ModalCreateCategory />
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
          "Loading..."
        ) : (
          <tbody>
            {data?.map((prod) => {
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
                      onClick={() => deleteProduct.mutate(prod?.id)}
                    />
                  </Td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TableProducts>
    </MainContainerDashboard>
  );
};

export default Dashboard;
