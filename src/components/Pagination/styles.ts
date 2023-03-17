import styled from "styled-components";
import { colors } from "../../styles/colors";

// ICONS

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  bottom: 2px;
`;

export const ButtonControlPage = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${colors.black};
  border-radius: 30%;
  font-size: 0.7em;
  padding: 0.4rem;
  width: 25px;
  border: none;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  color: ${colors.white};
  background-color: ${colors.black};
  border-radius: 50%;
  font-size: 1.5em;
  margin-right: 5px;
  padding: 0.2rem;
`;

export const ArrowRight = styled(IoIosArrowForward)`
  color: ${colors.white};
  background-color: ${colors.black};
  border-radius: 50%;
  font-size: 1.5em;
  margin-left: 5px;
  padding: 0.2rem;
`;
