import { CardContainer, DataCard, DescriptionCard } from "./styles";

// TYPES
import { IRelatoryCard } from "../Types/RelatoryCardTypes";

const CardRelatory = ({ data, description }: IRelatoryCard) => {
  return (
    <CardContainer>
      <DataCard>{data}</DataCard>
      <DescriptionCard>{description}</DescriptionCard>
    </CardContainer>
  );
};

export default CardRelatory;
