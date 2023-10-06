import styled from "styled-components";

// ICONS
import { IoMdClose } from "react-icons/io";
import { ImUpload } from "react-icons/im";

// VARIABLES
import { colors } from "@src/styles/colors";
import { weightFonts } from "@src/styles/weight";

interface IPropsButton {
  bgColor?: string;
}

export const FormControl = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 85%;
  gap: 1.2em;
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

export const ButtonNewCategory = styled.button`
  color: ${colors.white};
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: ${colors.black};
  font-size: 1.1em;
  font-weight: ${weightFonts.w700};
  padding: 0.8rem;
  width: 170px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 60px;
`;

export const TitleDescriptionCategory = styled.h1`
  color: ${colors.black};
  font-size: 2em;
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

export const InputImgCategory = styled.input`
  display: flex;
`;

export const InputContainerImgCategory = styled.label`
  background-color: ${colors.black};
  padding: 10px;
  border-radius: 0.5rem;
  color: ${colors.white};
`;

export const ButtonSubmitCategory = styled.button`
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
`;

export const UploadButtonContainer = styled.label`
  background-color: ${colors.black};
  padding: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.white};
  cursor: pointer;
  font-weight: ${weightFonts.w700};
  font-size: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
`;

export const InputButtonUpload = styled.input`
  display: none;
`;

export const UploadIcon = styled(ImUpload)`
  color: ${colors.white};
  font-size: 1.5em;
`;
