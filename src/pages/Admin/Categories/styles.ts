import { colors } from "@src/styles/colors";
import styled from "styled-components";

import { RiDeleteBin6Line } from "react-icons/ri";
import { weightFonts } from "@src/styles/weight";

interface IPropsContainerPreview {
  url_image: string;
}

interface IPropsTable {
  color?: string;
  weight?: string;
  width?: string;
  bgColor?: string;
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const ImageCategory = styled.img`
  cursor: pointer;
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
`;

export const PreviewImage = styled.div`
  height: 200px;
  width: 350px;
  background-image: ${({ url_image }: IPropsContainerPreview) =>
    `url(${url_image})` || "none"};
  position: absolute;
  top: -20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.6s ease;

  @keyframes fadeIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const IconDelete = styled(RiDeleteBin6Line)`
  color: ${colors.black};
  font-size: 2.5em;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.2rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td<IPropsTable>`
  color: ${({ color }) => color || `${colors.black}`};
  background-color: ${colors.white};
  width: ${({ width }) => width || "130px"};
  font-weight: ${weightFonts.w400};
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
`;
