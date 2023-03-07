import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { weightFonts } from "../../../styles/weight";

interface IPropsCard {
  colorStatus?: string;
  weightStatus?: string;
}

export const MainContainerCard = styled.div`
  background-color: ${colors.ligthGray};
  height: 300px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  animation: fadeCard 1.2s;
  transition: all 0.7s;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @keyframes fadeCard {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TitleProduct = styled.h1`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  text-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
  font-size: 1em;
`;

export const DescriptionDefault = styled.p`
  color: ${colors.black};
  font-weight: ${weightFonts.w400};
  display: inline-flex;
  gap: 8px;
`;

export const SubDescriptionDefault = styled.p`
  color: ${({ colorStatus }: IPropsCard) => colorStatus || `${colors.black}`};
  font-weight: ${({ weightStatus }: IPropsCard) =>
    weightStatus || `${weightFonts.w400}`};
`;
