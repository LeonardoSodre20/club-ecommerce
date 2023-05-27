import styled from "styled-components";
import { colors } from "@src/styles/colors";

export const ModalForegroundComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: calc(100vw - 250px);
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10000000;
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
  z-index: 100000;
`;
