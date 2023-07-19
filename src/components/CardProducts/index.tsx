// TYPES
import { IProductsProps } from "./types";

// STYLES
import * as S from "./styles";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/utils/formatters";

const CardProduct = ({ name, price, image }: IProductsProps) => {
  return (
    <S.Container>
      <S.TitleProduct>{name}</S.TitleProduct>
      <S.PriceProduct>{formatCurrecyForBrl(price)}</S.PriceProduct>
      <S.ImageProduct src={image} alt="image-product" />
    </S.Container>
  );
};

export default CardProduct;
