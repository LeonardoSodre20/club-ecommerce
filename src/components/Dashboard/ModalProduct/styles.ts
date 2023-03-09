import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { IoMdClose } from "react-icons/io";
import { weightFonts } from "../../../styles/weight";

interface IPropsButton {
  bgColor?: string;
}

export const ModalForegroundComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  animation: scaleForeground 1s normal;

  @keyframes scaleForeground {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ModalComponent = styled.div`
  height: 90vh;
  width: 1220px;
  background-color: ${colors.white};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BtnCloseModal = styled(IoMdClose)`
  color: ${colors.white};
  background-color: ${colors.black};
  font-size: 1.8em;
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
  transition: 1s;
`;

export const ButtonNewProduct = styled.button`
  color: ${colors.white};
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: ${colors.black};
  font-size: 1.1em;
  font-weight: ${weightFonts.w700};
  padding: 0.8rem;
  width: 230px;
  cursor: pointer;
`;

export const TitleDescriptionModal = styled.h1`
  color: ${colors.black};
  font-size: 2em;
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

export const FormControl = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LabelSelect = styled.label`
  color: ${colors.matteBlack};
  font-size: 1rem;
  font-weight: ${weightFonts.w600};
  position: absolute;
  left: 12px;
  top: -27px;
`;

export const SelectProducts = styled.select`
  background-color: ${colors.ligthGray};
  padding: 12px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  width: 600px;
  transition: all 0.5s;
  color: ${colors.darkGrey};

  font-size: 1em;
  text-indent: 1rem;

  :focus {
    background-color: ${colors.focusColor};
  }
`;

export const ButtonSubmitProducts = styled.button`
  color: ${colors.white};
  font-size: 1.5em;
  font-weight: ${weightFonts.w700};
  background-color: ${({ bgColor }: IPropsButton) =>
    bgColor || `${colors.black}`};
  border-radius: 0.7rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 250px;
`;

export const InputUploadPicture = styled.div`
  background-color: ${colors.ligthGray};
  padding: 10px;
  border-radius: 15px;
  width: 250px;
`;
