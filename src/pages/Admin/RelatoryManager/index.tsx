import { useQuery } from "react-query";
import Chart from "react-apexcharts";

// STYLES
import { MainContainerAllGraphics } from "./styles";

// COMPONENTS
import CardRelatory from "@src/components/Dashboard/CardRelatory";

// TYPES
import { IRelatoryTypes } from "@src/types/RelatoryTypes";

// PROVIDER
import providerRelatory from "@src/services/providers/Relatory/provider.relatory";

// CHARTS CONFIG

const GraphicsData = () => {
  const { data } = useQuery<IRelatoryTypes>(["relatory"], () => {
    return providerRelatory.handleGetAllInfoProducts();
  });

  const options = {
    chart: {
      id: "apexchart-example",
    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        borderRadiusApplication: "end" as "end",
        horizontal: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const optionsPie = {
    chart: {
      width: 380,
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const seriesPie = [44, 55, 13, 43, 22];

  return (
    <MainContainerAllGraphics>
      {/* <CardRelatory
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
      /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "absolute",
          gap: "100px",
          top: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.10)",
            borderRadius: "15px",
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "350px",
          }}
        >
          <Chart
            type="bar"
            width={340}
            height={340}
            options={options}
            series={series}
          />
        </div>

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.10)",
            borderRadius: "15px",
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "350px",
          }}
        >
          <Chart
            type="pie"
            width={350}
            height={350}
            options={optionsPie}
            series={seriesPie}
          />
        </div>
      </div>
    </MainContainerAllGraphics>
  );
};

export default GraphicsData;
