// TYPES
import { IProductsProps } from "./types";

// STYLES
import { Container, PriceProduct, TitleProduct } from "./styles";

const CardProduct = ({ name, price }: IProductsProps) => {
  return (
    <Container>
      <TitleProduct>{name}</TitleProduct>
      <PriceProduct>{price}</PriceProduct>
    </Container>
  );
};

export default CardProduct;
