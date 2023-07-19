import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

// STYLE
import * as S from "./styles";

import animNotFound from "../../../public/animations/notfound.json";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <S.ContentMain>
      <S.ContainerAnimation>
        <S.DescriptionData>Ops.. essa página não existe !</S.DescriptionData>
        <Lottie
          style={{
            height: "450px",
            width: "450px",
            marginBottom: "30px",
          }}
          options={{
            animationData: animNotFound,
            loop: false,
          }}
        />
        <S.ButtonRedirect onClick={() => navigate("/")}>
          Voltar ao inicio
        </S.ButtonRedirect>
      </S.ContainerAnimation>
    </S.ContentMain>
  );
};

export default NotFoundPage;
