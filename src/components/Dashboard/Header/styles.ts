import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: calc(100% - 250px);
  top: 0;
  right: 0;
  padding: 0.7rem;
  gap: 35px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
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

export const ContainerInicialLetter = styled.div`
  background-color: ${colors.black};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 3px;
  color: ${colors.white};
  font-weight: ${weightFonts.w700};
  font-size: 1.2em;
`;

export const NameUser = styled.h1`
  color: ${colors.black};
  font-size: 0.8em;
  font-weight: ${weightFonts.w500};
`;

export const ContainerIconShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  transition: 0.5s;
  padding: 0.5rem;

  :hover {
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const IconShare = styled(FaShareAlt)`
  font-size: 1.5em;
`;
