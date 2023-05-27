import { AxiosResponse } from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { api } from "@src/services/api";

// STYLES

import { MainContainerUsers, Td } from "./styles";

// COMPONENTS
import TableUsers from "@src/components/Dashboard/TableUsers";

// TYPES
import { IUser } from "./types";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    const { data }: AxiosResponse = await api.get("/users");
    setUsers(data.users);
  };

  return (
    <MainContainerUsers>
      <TableUsers
        name="Nome"
        lastname="Sobrenome"
        email="Email"
        status="Status"
        created_at="Data de cadastro"
        actions="Ações"
      >
        <tbody>
          {users?.map((info) => {
            return (
              <tr
                key={info._id}
                style={{
                  backgroundColor: "#f4f4f5",
                }}
              >
                <Td>{info.name}</Td>
                <Td>{info.lastname}</Td>
                <Td>{info.email}</Td>
                <>
                  {info.status === "Ativo" ? (
                    <Td
                      style={{
                        color: "#4BB543",
                        fontWeight: "bold",
                      }}
                    >
                      {info.status}
                    </Td>
                  ) : (
                    <Td
                      style={{
                        color: "#f10000",
                        fontWeight: "bold",
                      }}
                    >
                      {info.status}
                    </Td>
                  )}
                </>
                <Td>
                  {format(new Date(info.created_at), "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </Td>
                <Td></Td>
              </tr>
            );
          })}
        </tbody>
      </TableUsers>
    </MainContainerUsers>
  );
};

export default Users;
