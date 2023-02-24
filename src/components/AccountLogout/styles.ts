import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

export const ContainerAccountInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  position: absolute;
  top: 20px;
  right: 50px;
`;

export const Username = styled.div`
  color: ${colors.black};
  font-size: 0.9em;
`;

export const Avatar = styled.div`
  border: none;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0.3rem;
  border-radius: 50%;
  font-size: 1.1em;
  font-weight: ${weightFonts.w700};
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
