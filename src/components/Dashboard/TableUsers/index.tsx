// STYLE
import * as S from "./styles";

// TYPES
import { IPropsTableUsers } from "./types";

const TableUsers = ({
  name,
  lastname,
  email,
  status,
  created_at,
  actions,
  children,
}: IPropsTableUsers) => {
  return (
    <>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>{name}</S.Th>
            <S.Th>{lastname}</S.Th>
            <S.Th>{email}</S.Th>
            <S.Th>{status}</S.Th>
            <S.Th>{created_at}</S.Th>
            <S.Th>{actions}</S.Th>
          </S.Tr>
        </S.THead>
        {children}
      </S.Table>
    </>
  );
};

export default TableUsers;
