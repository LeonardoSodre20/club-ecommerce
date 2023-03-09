import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";

export const MainContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`;

export const ContainerProducts = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 2em;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const ContainerInputSearchProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 80px;
  gap: 0.8em;
`;

export const InputSearchProduct = styled.input`
  margin-top: 50px;
  background-color: ${colors.ligthGray};
  padding: 12px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  width: 500px;
  transition: all 0.5s;
  color: ${colors.black};

  font-size: 1em;
  text-indent: 1rem;

  ::placeholder {
    color: ${colors.darkGrey};
    font-weight: ${weightFonts.w500};
    font-size: 1em;
  }

  :focus {
    background-color: ${colors.focusColor};
  }
`;

export const SelectProductsByPage = styled.select`
  margin-top: 45px;
  background-color: ${colors.ligthGray};
  padding: 12px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
