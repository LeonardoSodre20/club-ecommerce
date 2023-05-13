import { useQuery } from "react-query";

// STYLES
import { MainContainerAllGraphics } from "./styles";

// COMPONENTS
import CardRelatory from "@src/components/Dashboard/CardRelatory";

// TYPES
import { IRelatoryTypes } from "@src/types/RelatoryTypes";

// PROVIDER
import providerRelatory from "@src/providers/Relatory/provider.relatory";

const GraphicsData = () => {
  const { data } = useQuery<IRelatoryTypes>(["relatory"], () => {
    return providerRelatory.handleGetAllInfoProducts();
  });

  return (
    <MainContainerAllGraphics>
      <CardRelatory
        data={data?.total ?? 0}
        description="Total de produtos cadastrados"
      />
      <CardRelatory
        data={data?.productsAvailable ?? 0}
        description="Produtos Disponíveis"
      />
      <CardRelatory
        data={data?.productsUnavailable ?? 0}
        description="Produtos Indisponíveis"
      />
      <CardRelatory
        data={data?.usersActive ?? 0}
        description="Usuários Ativos"
      />
    </MainContainerAllGraphics>
  );
};

export default GraphicsData;
