import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { IProducts } from "@src/pages/Admin/Dashboard/types";

// STYLE
import { MainContainerDashboard, Table, Td, Th, Tr } from "./styles";

// COMPONENTS
import HeaderAdmin from "@src/components/Dashboard/Header";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";
import { formatDate } from "@src/formatters/dateFormatted";

// PROVIDER
import providerProducts from "@src/providers/Products/provider.products";

const Dashboard = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery<IProducts[]>(["product"], () => {
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
      <Table>
        <thead>
          <Tr>
            <Th width="280px">Nome do Produto</Th>
            <Th>Quantidade</Th>
            <Th>Status</Th>
            <Th>Preço</Th>
            <Th>Acões</Th>
          </Tr>
        </thead>
        <tbody>
          {data?.map((prod) => {
            return (
              <Tr key={prod["id"]}>
                <Td width="280px">{prod["name"]}</Td>
                <Td>{prod["quantity"]}</Td>
                <Td>{prod["status"]}</Td>
                <Td>{prod["price"]}</Td>
                <Td>teste</Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </MainContainerDashboard>
  );
};

export default Dashboard;
