import { useQuery } from "react-query";

// STYLES
import { MainContainerAllGraphics } from "./styles";

// COMPONENTS
import CardRelatory from "@src/components/Dashboard/CardRelatory";

// TYPES
import { IRelatoryTypes } from "@src/types/RelatoryTypes";

// PROVIDER
import providerRelatory from "@src/services/Relatory/provider.relatory";

// CHARTS CONFIG
import { VictoryChart, VictoryBar } from "victory";

const GraphicsData = () => {
  const { data } = useQuery<IRelatoryTypes>(["relatory"], () => {
    return providerRelatory.handleGetAllInfoProducts();
  });

  const dataDefault = [
    {
      x: "column 1",
      y: 10,
    },
    {
      x: "column 2",
      y: 20,
    },
    {
      x: "column 3",
      y: 30,
    },
    {
      x: "column 4",
      y: 40,
    },
  ];

  return (
    <MainContainerAllGraphics>
      <VictoryChart>
        <VictoryBar
          barWidth={(index: any) => index * 2 + 8}
          style={{
            data: { backgroundColor: "#f10000" },
            border: { backgroundColor: "#f10fasd" },
          }}
          data={dataDefault}
          labels={({ datum }) => `y: ${datum.y}`}
        />
      </VictoryChart>
    </MainContainerAllGraphics>
  );
};

export default GraphicsData;
