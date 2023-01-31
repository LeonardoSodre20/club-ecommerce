import styled from "styled-components";
import urlImage from "../../../public/assets/categories/airjordan.jpg";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

interface IPropsCategories {
  widthContainer: string;
}

export const CategoriesContainerMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  gap: 0.8em;
  min-height: calc(100vh - 70px);
  width: 100%;
`;

export const ContainerCategoryWithDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  opacity: 80%;
  transition: 0.7s;
  cursor: pointer;

  // Image de Fundo

  background-image: url(${urlImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  // Medidas

  width: ${({ widthContainer }: IPropsCategories) => widthContainer};
  height: 250px;

  // Efeitos

  :hover {
    opacity: 100%;
  }
`;

export const CategorieNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.ligthGray};
  opacity: 75%;
  border-radius: 0.5rem;
  gap: 0.2em;
  padding: 12px 5px;
  width: 150px;
  transition: 0.7s;

  > h1 {
    color: ${colors.black};
    font-size: 0.9em;
    font-weight: ${weightFonts.w600};
  }

  > h2 {
    color: ${colors.black};
    font-size: 0.9em;
    font-weight: ${weightFonts.w400};
  }

  // efeitos

  :hover {
    opacity: 100%;
    transform: scale(1.1);
  }
`;
