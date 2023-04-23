import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

// VARIABLES
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;
  height: 150px;
  width: 250px;
  background-color: ${colors.black};
  border-radius: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DataCard = styled.span`
  color: ${colors.white};
  font-size: 1.8em;
  font-weight: ${weightFonts.w700};
`;

export const DescriptionCard = styled.p`
  font-size: 0.7em;
  color: ${colors.white};
  font-weight: ${weightFonts.w600};
`;
