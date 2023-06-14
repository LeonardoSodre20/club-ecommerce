import { useQuery } from "react-query";

// TYPES
import { ICategoryTypes } from "@src/types/CategoriesTypes";

// COMPONENTS
import Header from "@src/components/Header";
import CardCategory from "@src/components/CardCategories";

// STYLES
import { MainContainerCategories, ContainerCards } from "./styles";

// PROVIDER
import providerCategories from "@src/providers/Categories/provider.categories";

const CategoriesProducts = () => {
  const { data, isLoading } = useQuery<ICategoryTypes[]>(["categories"], () => {
    return providerCategories.handleGetAllCategories();
  });

  if (isLoading) {
    return <h1>Hello World</h1>;
  }

  return (
    <>
      <Header />
      <MainContainerCategories>
        <ContainerCards>
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
        </ContainerCards>
      </MainContainerCategories>
    </>
  );
};

export default CategoriesProducts;
