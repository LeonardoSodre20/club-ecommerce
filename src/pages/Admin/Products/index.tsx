// STYLE
import * as S from "./styles";

// COMPONENTS
import HeaderAdmin from "@src/components/Dashboard/Header";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";

// COMPONENTS
import ModalEditProduct from "@src/components/Dashboard/ModalEditProduct";

// HOOKS
import useProduct from "@src/hooks/useProduct";

const Products = () => {
  const { data } = useProduct();

  return (
    <S.MainContainerDashboard>
      <HeaderAdmin
        title="Produtos"
        placeholder="Pesquise por algum produto..."
      />
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th width="280px">Nome do Produto</S.Th>
            <S.Th>Quantidade</S.Th>
            <S.Th>Status</S.Th>
            <S.Th>Preço</S.Th>
            <S.Th>Acões</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {data?.map((prod) => {
            return (
              <S.Tr key={prod["id"]}>
                <S.Td width="280px">{prod["name"]}</S.Td>
                <S.Td>{prod["quantity"]}</S.Td>
                <S.Td
                  color={
                    prod["status"] === "Disponível" ? "#4BB543" : "#f10000"
                  }
                >
                  {prod["status"]}
                </S.Td>
                <S.Td>{formatCurrecyForBrl(prod["price"])}</S.Td>
                <S.Td>
                  <ModalEditProduct />
                  <S.IconDelete />
                </S.Td>
              </S.Tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.MainContainerDashboard>
  );
};

export default Products;
