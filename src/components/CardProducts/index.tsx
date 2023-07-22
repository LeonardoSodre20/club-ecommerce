// TYPES
import { IProductsProps } from "./types";

// STYLES
import * as S from "./styles";

// FORMATTERS
import { formatCurrecyForBrl } from "@src/utils/formatters";

// HOOKS
import { useAnimation } from "@src/hooks/useAnimation";

const CardProduct = ({ name, price, image }: IProductsProps) => {
  const { cardRef, handleTranslateContentForCenter } = useAnimation();

  return (
    <S.Container
      onClick={() => handleTranslateContentForCenter()}
      ref={cardRef}
    >
      <S.TitleProduct>{name}</S.TitleProduct>
      <S.PriceProduct>{formatCurrecyForBrl(price)}</S.PriceProduct>
      <S.ImageProduct src={image} alt="image-product" />
    </S.Container>
  );
};

export default CardProduct;
