import { useNavigate } from "react-router-dom";

import {
  DescriptionDefault,
  MainContainerCard,
  SubDescriptionDefault,
  TitleProduct,
} from "./styles";
import { IProductsInfo } from "./types";
import { formatCurrecyForBrl } from "../../../formatters/currencyFomatted";

import imgProducts from "../../../../public/assets/imgs/tShirt.jpg";

const CardProduct = ({ name, amount, price, status }: IProductsInfo) => {
  const navigate = useNavigate();

  return (
    <MainContainerCard onClick={() => navigate("/detailsProduct")}>
      <TitleProduct>Nome: {name}</TitleProduct>
      <SubDescriptionDefault>Quantidade: {amount}</SubDescriptionDefault>
      <DescriptionDefault>
        Preço
        <SubDescriptionDefault weightStatus="bold">
          {formatCurrecyForBrl(parseFloat(price))}
        </SubDescriptionDefault>
      </DescriptionDefault>
      {status === "Disponível" ? (
        <DescriptionDefault>
          Status:
          <SubDescriptionDefault colorStatus="#4BB543" weightStatus="700">
            {status}
          </SubDescriptionDefault>
        </DescriptionDefault>
      ) : (
        <DescriptionDefault>
          Status:
          <SubDescriptionDefault colorStatus="#f10000" weightStatus="700">
            {status}
          </SubDescriptionDefault>
        </DescriptionDefault>
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
          src={imgProducts}
          alt="Camiseta"
          style={{
            width: "190px",
            borderRadius: "10px",
            boxShadow: "0 10px 10px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </MainContainerCard>
  );
};

export default CardProduct;
