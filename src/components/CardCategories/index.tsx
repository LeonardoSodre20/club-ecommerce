import { MainContainerCard, TitleCategory } from "./styles";

// TYPES
import { ICategoryCard } from "./Types";

const CardCategory = ({ name, image }: ICategoryCard) => {
  return (
    <MainContainerCard
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <TitleCategory>{name}</TitleCategory>
    </MainContainerCard>
  );
};

export default CardCategory;
