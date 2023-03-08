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
  SelectProductsByPage,
} from "./styles";

// TYPES
import { AxiosResponse } from "axios";
import { IProducts } from "../Admin/Dashboard/types";
import { api } from "../../services/api";

// COMPONENTS
import LoaderProducts from "../../components/Home/LoaderHome";

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // PAGINATION
  const [itemsByPage, setItemsByPage] = useState<number>(20);
  const [searchProduct, setSearchProduct] = useState<string>("");

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product", {
      params: { search: searchProduct, pageSize: itemsByPage },
    });
    setProducts(response.data.products);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, [searchProduct, itemsByPage]);

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
            <ContainerInputSearchProducts>
              <InputSearchProduct
                placeholder="Busque por algum produto..."
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchProduct(event.target.value)
                }
              />
              <SelectProductsByPage
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  setItemsByPage(Number(event.target.value));
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </SelectProductsByPage>
            </ContainerInputSearchProducts>

            <ContainerProducts>
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
            </ContainerProducts>
          </>
        )}
      </MainContainerHome>
    </>
  );
};

export default Home;
