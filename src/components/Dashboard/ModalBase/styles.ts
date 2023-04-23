import styled from "styled-components";
import { colors } from "@src/styles/colors";

export const ModalForegroundComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: all 0.5s;
`;

export const ModalComponent = styled.div`
  height: 90vh;
  width: 800px;
  background-color: ${colors.white} !important;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
