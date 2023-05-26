import styled from "styled-components";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: calc(100% - 250px);
  top: 10px;
  right: 0;
  padding: 0.5rem;
  gap: 15px;
`;

export const TitleBySession = styled.h1`
  margin-left: 10px;
  color: ${colors.black};
  font-size: 2em;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
`;

export const InputSearch = styled.input`
  margin-left: 15px;
  background-color: ${colors.ligthGray};
  width: 500px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0.7rem;
  border-radius: 0.5rem;
  font-size: 1em;
  border: none;
`;

export const ContainerProfile = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const ImageProfile = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0, 0.15);
`;

export const NameUser = styled.h1`
  color: ${colors.black};
  font-size: 0.8em;
  font-weight: ${weightFonts.w500};
`;
