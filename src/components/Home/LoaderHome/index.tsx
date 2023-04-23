import Lottie from "react-lottie";
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
        options={{
          animationData: loaderApp,
          loop: false,
        }}
        style={{
          height: "200px",
          width: "200px",
          textShadow: "0 10px 10px rgba(0,0,0,0.2)",
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
