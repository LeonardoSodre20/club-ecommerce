import { useNavigate } from "react-router-dom";
import { MainContainerCard, TitleCategory } from "./styles";

// TYPES
import { ICategoryCard } from "./Types";

const CardCategory = ({ name, image, routeName }: ICategoryCard) => {
  const navigate = useNavigate();

  return (
    <MainContainerCard
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={() => navigate(routeName)}
    >
      <TitleCategory>{name}</TitleCategory>
    </MainContainerCard>
  );
};

export default CardCategory;
