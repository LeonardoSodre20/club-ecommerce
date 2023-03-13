// COMPONENTS

import { ChangeEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import CardProduct from "../../components/Home/CardProduct";

// STYLES
import {
  ContainerInputSearchProducts,
  ContainerProducts,
  InputSearchProduct,
  MainContainerHome,
} from "./styles";

// TYPES
import { AxiosResponse } from "axios";
import { IProducts } from "../Admin/Dashboard/types";
import { api } from "../../services/api";

// COMPONENTS
import LoaderProducts from "../../components/Home/LoaderHome";
// import Pagination from "../../components/Pagination";

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // PAGINATION
  const [searchProduct, setSearchProduct] = useState<string>("");

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product", {
      params: { search: searchProduct, pageSize: 20 },
    });
    setProducts(response.data.products);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, [searchProduct]);

  useEffect(() => {
    {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, []);

  return (
    <>
      <Header />

      <MainContainerHome>
        {isLoading ? (
          <LoaderProducts />
        ) : (
          <>
            <ContainerInputSearchProducts>
              <InputSearchProduct
                type="search"
                placeholder="Busque por algum produto..."
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchProduct(event.target.value)
                }
              />
            </ContainerInputSearchProducts>

            <ContainerProducts>
              {products.map((prod) => {
                return (
                  <>
                    <CardProduct
                      key={prod._id}
                      name={prod.name}
                      amount={prod.amount}
                      price={prod.price}
                      status={prod.status}
                    />
                  </>
                );
              })}
            </ContainerProducts>
          </>
        )}
      </MainContainerHome>
    </>
  );
};

export default Home;
