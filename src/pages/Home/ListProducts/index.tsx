import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// COMPONENTS
import Header from "@src/components/Header";
import TheContentMain from "@src/components/Global/TheContent";
import CardProduct from "@src/components/CardProducts";

import providerCategories from "@src/services/providers/Categories/provider.categories";

// TYPES
import { IProducts } from "@src/pages/Admin/Products/types";

const ListProducts = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dataById } = useQuery<IProducts[]>(["categories"], () => {
    return providerCategories.handleProductsByCategory(id);
  });

  return (
    <>
      <Header />
      <TheContentMain>
        {dataById?.map((product) => {
          return (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </TheContentMain>
    </>
  );
};

export default ListProducts;
