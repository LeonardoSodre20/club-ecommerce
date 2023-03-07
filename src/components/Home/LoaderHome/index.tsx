import Lottie from "lottie-react";
import loaderApp from "../../../../public/animations/lf20_f1dhzsnx.json";

const LoaderProducts = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Lottie
        animationData={loaderApp}
        loop={false}
        style={{
          height: "200px",
          width: "200px",
        }}
      />

      <h1
        style={{
          color: "#000",
          fontSize: "0.8em",
        }}
      >
        Carregando produtos...
      </h1>
    </div>
  );
};

export default LoaderProducts;
