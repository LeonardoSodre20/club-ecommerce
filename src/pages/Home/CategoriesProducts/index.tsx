// COMPONENTS
import Header from "@src/components/Header";

// STYLES
import { ContainerCardCategory, MainContainerCategories } from "./styles";

const CategoriesProducts = () => {
  return (
    <>
      <Header />
      <MainContainerCategories>
        <ContainerCardCategory>
          <h1>Roupas</h1>
        </ContainerCardCategory>
      </MainContainerCategories>
    </>
  );
};

export default CategoriesProducts;
