import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";
import { FaCartArrowDown } from "react-icons/fa";

export const ContainerHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 70px;
`;

export const LogoDescription = styled.h1`
  font-size: 2em;
  font-weight: ${weightFonts.w700};
  text-transform: uppercase;
  color: ${colors.white};
  margin-left: 1.4em;
`;

export const ContainerLinksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  margin-right: 1.4em;
`;

export const LinkItem = styled.span`
  color: ${colors.white};
  font-size: 1.2em;
  font-weight: ${weightFonts.w600};
  transition: all 0.5s;
  padding: 5px 5px;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const ContainerShop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

export const IconCart = styled(FaCartArrowDown)`
  color: ${colors.white};
  font-size: 1.2em;
`;

export const CounterShop = styled.span`
  font-weight: ${weightFonts.w600};
  font-size: 1.2em;
  color: ${colors.white};
`;
