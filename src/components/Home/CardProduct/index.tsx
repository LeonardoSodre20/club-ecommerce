import * as S from "./styles";
import { IProductsInfo } from "./types";
import { formatCurrecyForBrl } from "@src/formatters/currencyFomatted";

const CardProduct = ({ name, amount, price, status }: IProductsInfo) => {
  return (
    <S.MainContainerCard>
      <S.TitleProduct>Nome: {name}</S.TitleProduct>
      <S.SubDescriptionDefault>Quantidade: {amount}</S.SubDescriptionDefault>
      <S.DescriptionDefault>
        Preço
        <S.SubDescriptionDefault weightStatus="bold">
          {formatCurrecyForBrl(parseFloat(price))}
        </S.SubDescriptionDefault>
      </S.DescriptionDefault>
      {status === "Disponível" ? (
        <S.DescriptionDefault>
          Status:
          <S.SubDescriptionDefault colorStatus="#4BB543" weightStatus="700">
            {status}
          </S.SubDescriptionDefault>
        </S.DescriptionDefault>
      ) : (
        <S.DescriptionDefault>
          Status:
          <S.SubDescriptionDefault colorStatus="#f10000" weightStatus="700">
            {status}
          </S.SubDescriptionDefault>
        </S.DescriptionDefault>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          src={""}
          alt="Camiseta"
          style={{
            width: "190px",
            borderRadius: "10px",
            boxShadow: "0 10px 10px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </S.MainContainerCard>
  );
};

export default CardProduct;
