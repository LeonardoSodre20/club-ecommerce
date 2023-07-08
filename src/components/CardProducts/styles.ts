import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  flex-direction: column;
  padding: 1rem;
  background-color: ${colors.white};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
  height: 350px;
  width: 350px;
  cursor: pointer;
`;

export const ImageProduct = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

export const TitleProduct = styled.h1`
  color: ${colors.black};
  text-align: center;
  font-size: 1.5em;
`;

export const PriceProduct = styled.h2`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  font-size: 1em;
`;
