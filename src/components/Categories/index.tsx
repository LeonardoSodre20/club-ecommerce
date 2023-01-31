import {
  CategorieNameContainer,
  CategoriesContainerMain,
  ContainerCategoryWithDetails,
} from "./styles";

const Categories = () => {
  return (
    <CategoriesContainerMain>
      <ContainerCategoryWithDetails widthContainer="500px">
        <CategorieNameContainer>
          <h1>Tênis</h1>
          <h2>Explorar</h2>
        </CategorieNameContainer>
      </ContainerCategoryWithDetails>
      <ContainerCategoryWithDetails widthContainer="500px">
        <CategorieNameContainer>
          <h1>Tênis</h1>
          <h2>Explorar</h2>
        </CategorieNameContainer>
      </ContainerCategoryWithDetails>
      <ContainerCategoryWithDetails widthContainer="500px">
        <CategorieNameContainer>
          <h1>Tênis</h1>
          <h2>Explorar</h2>
        </CategorieNameContainer>
      </ContainerCategoryWithDetails>
      <ContainerCategoryWithDetails widthContainer="500px">
        <CategorieNameContainer>
          <h1>Tênis</h1>
          <h2>Explorar</h2>
        </CategorieNameContainer>
      </ContainerCategoryWithDetails>
    </CategoriesContainerMain>
  );
};

export default Categories;
