import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

export const ContainerMainAccount = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  height: calc(100vh - 70px);
  width: 100%;
`;

export const FormControl = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 550px;
`;

export const TitleFormMain = styled.h1`
  color: ${colors.black};
  font-weight: ${weightFonts.w700};
  text-align: center;
  width: 100%;
  font-size: 1.2em;

  padding: 0.5rem;
  border-bottom: 1px solid ${colors.darkGrey};
`;
