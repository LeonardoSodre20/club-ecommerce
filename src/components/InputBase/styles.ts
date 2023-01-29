import styled from "styled-components";
import { colors } from "../../styles/colors";
import { weightFonts } from "../../styles/weight";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface IPropsInput {
  width?: string;
}

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  background-color: ${colors.ligthGray};
  padding: 12px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  width: ${({ width }: IPropsInput) => width};

  font-size: 1.1em;
  text-indent: 1rem;

  ::placeholder {
    color: ${colors.darkGrey};
    font-weight: ${weightFonts.w500};
    font-size: 1em;
  }
`;

export const Label = styled.label`
  color: ${colors.matteBlack};
  font-size: 1rem;
  font-weight: ${weightFonts.w600};
  position: absolute;
  left: 12px;
  top: -27px;
`;

export const MessageError = styled.p`
  color: ${colors.red};
  font-size: 1rem;
  font-weight: ${weightFonts.w600};
  position: absolute;
  left: 10px;
`;

export const ContainerInputWithType = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconEyeInvisible = styled(AiFillEyeInvisible)`
  color: ${colors.darkGrey};
  font-size: 1.8em;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export const IconEyeVisible = styled(AiFillEye)`
  color: ${colors.darkGrey};
  font-size: 1.8em;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
