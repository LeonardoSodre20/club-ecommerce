import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// PROVIDER
import providerCategories from "@src/providers/Categories/provider.categories";

// TYPES
import { IProducts } from "@src/pages/Admin/Products/types";

// COMPONENTS
import Header from "@src/components/Header";
import TheContentMain from "@src/components/Global/TheContent";
import CardProduct from "@src/components/CardProducts";

const ListProducts = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery<IProducts[]>(["categories"], () => {
    return providerCategories.handleProductsByCategory(id);
  });

  return (
    <>
      <Header />
      <TheContentMain>
        {data?.map((product) => {
          return (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </TheContentMain>
    </>
  );
};

export default ListProducts;
