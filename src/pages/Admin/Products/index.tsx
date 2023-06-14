import { useMutation, useQuery, useQueryClient } from "react-query";

// TYPES
import { IProducts } from "@src/pages/Admin/Products/types";

// STYLE
import {
  IconDelete,
  MainContainerDashboard,
  Table,
  Td,
  Th,
  Tr,
} from "./styles";

// COMPONENTS
import HeaderAdmin from "@src/components/Dashboard/Header";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";

// PROVIDER
import providerProducts from "@src/providers/Products/provider.products";
import ModalEditProduct from "@src/components/Dashboard/ModalEditProduct";

const Products = () => {
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
                <Td
                  color={
                    prod["status"] === "Disponível" ? "#4BB543" : "#f10000"
                  }
                >
                  {prod["status"]}
                </Td>
                <Td>
                  {parseFloat(prod["price"]).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td>
                  <ModalEditProduct />
                  <IconDelete
                    onClick={() => handleDeleteProductById.mutate(prod["id"])}
                  />
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </MainContainerDashboard>
  );
};

export default Products;
