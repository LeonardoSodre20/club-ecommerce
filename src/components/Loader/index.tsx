import Lottie from "lottie-react";
import loaderTable from "../../../public/animations/97071-infinite-scroll-loader.json";

const LoaderItems = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        left: "450px",
      }}
    >
      <Lottie
        animationData={loaderTable}
        loop={true}
        style={{
          position: "absolute",
          top: "15px",
          color: "#000",
        }}
      />
    </div>
  );
};

export default LoaderItems;
