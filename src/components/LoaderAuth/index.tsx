import Lottie from "react-lottie";
import loaderAuth from "../../../public/animations/transition.json";

const LoaderAuth = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "100000",
      }}
    >
      <Lottie
        speed={0.47}
        options={{
          animationData: loaderAuth,
          loop: false,
        }}
        height="100%"
        width="100%"
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default LoaderAuth;
