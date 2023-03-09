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
import Pagination from "../../components/Pagination";

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading123, setIsLoading123] = useState<boolean>(true);

  // PAGINATION
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [itemsByPage, setItemsByPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages = Math.ceil(products.length / itemsByPage);
  const startIndex = currentPage * itemsByPage;
  const endIndex = startIndex + itemsByPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleGetAllProducts = async () => {
    const response: AxiosResponse = await api.get("/product", {
      params: { search: searchProduct, pageSize: 8 },
    });
    setProducts(response.data.products);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, [searchProduct]);

  useEffect(() => {
    if (products) {
      console.log(products);
      setIsLoading123(false);
    }
  }, [products]);

  return (
    <>
      <Header />

      <MainContainerHome>
        {isLoading123 ? (
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
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </MainContainerHome>
    </>
  );
};

export default Home;
