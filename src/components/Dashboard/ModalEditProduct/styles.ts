import { colors } from "@src/styles/colors";
import styled from "styled-components";

// ICONS
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const IconEdit = styled(FaEdit)`
  color: ${colors.black};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.2rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
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
