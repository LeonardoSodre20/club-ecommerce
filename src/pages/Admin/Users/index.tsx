import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// STYLES
import * as S from "./styles";

// COMPONENTS
import TableUsers from "@src/components/Dashboard/TableUsers";

// HOOKS
import useClient from "@src/hooks/useClient";

const Users = () => {
  const { data } = useClient();

  return (
    <S.MainContainerUsers>
      <TableUsers
        name="Nome"
        lastname="Sobrenome"
        email="Email"
        status="Status"
        created_at="Data de cadastro"
        actions="Ações"
      >
        <tbody>
          {data?.map((info) => {
            return (
              <tr
                key={info._id}
                style={{
                  backgroundColor: "#f4f4f5",
                }}
              >
                <S.Td>{info.name}</S.Td>
                <S.Td>{info.lastname}</S.Td>
                <S.Td>{info.email}</S.Td>
                <S.Td color={info.status === "Ativo" ? "#4BB543" : "#f10000"}>
                  {info.status}
                </S.Td>
                <S.Td>
                  {format(new Date(info.created_at), "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </S.Td>
                <S.Td></S.Td>
              </tr>
            );
          })}
        </tbody>
      </TableUsers>
    </S.MainContainerUsers>
  );
};

export default Users;
