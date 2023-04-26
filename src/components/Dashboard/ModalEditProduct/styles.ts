import { colors } from "@src/styles/colors";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

export const IconEdit = styled(FaEdit)`
  color: ${colors.black};
  font-size: 2.5em;
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.2rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
