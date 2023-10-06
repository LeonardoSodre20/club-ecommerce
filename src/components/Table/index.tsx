import { ReactNode } from "react";
import * as S from "./styles";

interface PropsTableDefault {
  children: ReactNode;
  data: string[];
}

const TableDefault = ({ data, children }: PropsTableDefault) => {
  return (
    <S.Table>
      <thead>
        <S.Tr>
          {Array.from(data, (item, index) => {
            return <S.Th key={index}>{item}</S.Th>;
          })}
        </S.Tr>
      </thead>
      {children}
    </S.Table>
  );
};

export default TableDefault;
