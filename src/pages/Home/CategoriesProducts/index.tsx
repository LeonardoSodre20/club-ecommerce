import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

// COMPONENTS
import Header from "@src/components/Header";

// STYLES
import { MainContainerCategories } from "./styles";

// SERVICES
import { api } from "@src/services/api";

// TYPES
import { AxiosResponse } from "axios";
import { ICategoryTypes } from "@src/types/CategoriesTypes";

const CategoriesProducts = () => {
  const [categories, setCategories] = useState<ICategoryTypes[]>([]);

  const handleGetAllCategories = async () => {
    const response: AxiosResponse = await api.get("/category");
    setCategories(response.data.allCategories);
  };

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  return (
    <>
      <Header />
      <MainContainerCategories>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {categories.map((category) => {
            return (
              <div>
                <span>{category.name}</span>
                <span>
                  {format(parseISO(category.created_at), "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </MainContainerCategories>
    </>
  );
};

export default CategoriesProducts;
