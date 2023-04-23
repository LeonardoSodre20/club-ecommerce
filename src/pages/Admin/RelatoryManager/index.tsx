import { useEffect, useState } from "react";
import { api } from "@src/services/api";

// STYLES
import { MainContainerAllGraphics } from "./styles";

// COMPONENTS
import CardRelatory from "@src/components/Dashboard/CardRelatory";

import { IRelatoryTypes } from "@src/types/RelatoryTypes";

const GraphicsData = () => {
  const [dataRelatory, setRelatoryData] = useState<IRelatoryTypes | null>(null);

  useEffect(() => {
    handleGetAllInformationsRelatory();
  }, []);

  const handleGetAllInformationsRelatory = async () => {
    try {
      const response = await api.get("/relatory");
      setRelatoryData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainerAllGraphics>
      <CardRelatory
        data={dataRelatory?.total ?? 0}
        description="Total de produtos cadastrados"
      />
      <CardRelatory
        data={dataRelatory?.productsAvailable ?? 0}
        description="Produtos Disponíveis"
      />
      <CardRelatory
        data={dataRelatory?.productsUnavailable ?? 0}
        description="Produtos Indisponíveis"
      />
      <CardRelatory
        data={dataRelatory?.usersActive ?? 0}
        description="Usuários Ativos"
      />
    </MainContainerAllGraphics>
  );
};

export default GraphicsData;
