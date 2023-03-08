// COMPONENTS

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CardProduct from "../../components/Home/CardProduct";

// STYLES
import { MainContainerHome } from "./styles";

// TYPES
import { AxiosResponse } from "axios";
import { IProducts } from "../Admin/Dashboard/types";
import { api } from "../../services/api";

// COMPONENTS
import LoaderProducts from "../../components/Home/LoaderHome";

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product");
    setProducts(response.data.products);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Header />

      <MainContainerHome>
        {isLoading ? (
          <LoaderProducts />
        ) : (
          <>
            {products.map((prod, index: number) => {
              return (
                <>
                  <CardProduct
                    key={index}
                    name={prod.name}
                    amount={prod.amount}
                    price={prod.price}
                    status={prod.status}
                  />
                </>
              );
            })}
          </>
        )}
      </MainContainerHome>
    </>
  );
};

export default Home;
