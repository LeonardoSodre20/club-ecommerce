import { colors } from "@src/styles/colors";
import styled from "styled-components";

import { RiDeleteBin6Line } from "react-icons/ri";

interface IPropsContainerPreview {
  url_image: string;
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Td = styled.td`
  color: ${colors.black};
  font-size: 0.8em;
  text-align: center;
  padding: 0.1rem;
  width: 180px;
  font-weight: 200;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ImageCategory = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 15px;
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
