// COMPONENTS
import Header from "@src/components/Header";
import CardCategory from "@src/components/CardCategories";

// HOOKS
import useCategory from "@src/hooks/useCategory";

// STYLES
import * as S from "./styles";

const CategoriesProducts = () => {
  const { data, isLoading } = useCategory();

  if (isLoading) return <h1>Hello World</h1>;

  return (
    <>
      <Header />
      <S.MainContainerCategories>
        <S.ContainerCards>
          {data?.map((cat) => {
            return (
              <CardCategory
                key={cat?.id}
                name={cat.name}
                image={cat?.image}
                routeName={`/listProducts/${cat?.id}`}
              />
            );
          })}
        </S.ContainerCards>
      </S.MainContainerCategories>
    </>
  );
};

export default CategoriesProducts;
