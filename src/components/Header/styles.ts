import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

// ICONS
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

export const ContainerHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.buttonDefault};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 100;

  width: 100%;
  height: 70px;
  position: fixed;
`;

export const LogoDescription = styled.h1`
  font-size: 2em;
  font-weight: ${weightFonts.w700};
  text-transform: uppercase;
  color: ${colors.white};
  margin-left: 1.4em;

  @media (max-width: 600px) {
    font-size: 1.4em;
  }
`;

export const ContainerLinksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  margin-right: 1.4em;

  @media (max-width: 1000px) {
    display: none;
  }
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

// RESPONSIVE

export const ButtonOpenMenuMobile = styled(IoMdMenu)`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    color: ${colors.white};
    font-size: 2.5em;
    margin-right: 20px;
  }
`;

export const ContainerLinksResponsive = styled.div`
  position: absolute;
  top: 70px;
  background-color: ${colors.buttonDefault};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.2em;
  animation: translateMenu 1s;

  @keyframes translateMenu {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const SubContainerLinksResponsive = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2em;
`;
