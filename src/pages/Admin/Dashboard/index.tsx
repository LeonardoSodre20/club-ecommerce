import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { IProducts } from "@src/pages/Admin/Dashboard/types";

// STYLE
import { IconDelete, MainContainerDashboard, Td } from "./styles";

// COMPONENTS
import TableProducts from "@src/components/Dashboard/Table";
import ModalEditProduct from "@src/components/Dashboard/ModalEditProduct";
import HeaderAdmin from "@src/components/Dashboard/Header";

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

  return (
    <MainContainerDashboard>
      <HeaderAdmin
        title="Produtos"
        placeholder="Pesquise por algum produto..."
      />

      {/* <TableProducts
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
                  <Td>{prod["name"]}</Td>
                  <Td>{prod["quantity"]}</Td>
                  {prod["status"] === "Disponível" ? (
                    <Td color="#4BB543" weight="bolder">
                      {prod["status"]}
                    </Td>
                  ) : (
                    <Td color="#f10000" weight="bolder">
                      {prod["status"]}
                    </Td>
                  )}
                  <Td>{formatCurrecyForBrl(parseFloat(prod["price"]))}</Td>
                  <Td>{formatDate(prod["created_at"])}</Td>
                  <Td>
                    <ModalEditProduct />
                    <IconDelete
                      onClick={() => handleDeleteProductById.mutate(prod["id"])}
                    />
                  </Td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TableProducts> */}
    </MainContainerDashboard>
  );
};

export default Dashboard;
