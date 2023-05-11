// COMPONENTS
import Header from "@src/components/Header";
import CardCategory from "@src/components/CardCategories";

// STYLES
import { MainContainerCategories, ContainerCards } from "./styles";
import { useEffect, useState } from "react";
import { api } from "@src/services/api";

const CategoriesProducts = () => {
  const [allCategories, setAllCategories] = useState<any>([]);

  const handleGetAllCategories = async () => {
    try {
      const response = await api.get("/category");
      setAllCategories(response?.data?.allCategories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  return (
    <>
      <Header />
      <MainContainerCategories>
        <ContainerCards>
          {allCategories?.map((cat: any) => {
            return (
              <CardCategory key={cat?.id} name={cat?.name} image={cat?.image} />
            );
          })}
        </ContainerCards>
      </MainContainerCategories>
    </>
  );
};

export default CategoriesProducts;
