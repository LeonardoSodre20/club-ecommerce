import { AxiosResponse } from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "@src/services/api";

// STYLES
import { IconDelete, IconEdit } from "../Dashboard/styles";
import { MainContainerUsers, Td } from "./styles";

// COMPONENTS
import TableUsers from "../../../components/Dashboard/TableUsers";

// TYPES
import { IUser } from "./types";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const handleGetAllUsers = async () => {
    const { data }: AxiosResponse = await api.get("/users");
    setUsers(data.users);
  };

  const handleDeleteUsersById = async (id: string) => {
    const response: AxiosResponse = await api.delete(`/users/${id}`);
    setUsers(users?.filter((info) => info._id !== id));
    toast.success(response.data.message);
    return response.data;
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <MainContainerUsers>
      <TableUsers
        name="Nome"
        lastname="Sobrenome"
        email="Email"
        role="Permissões"
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
                <Td>{info.role}</Td>
                <Td>
                  {format(new Date(info.created_at), "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </Td>
                <Td>
                  <IconEdit />
                  <IconDelete />
                </Td>
              </tr>
            );
          })}
        </tbody>
      </TableUsers>
    </MainContainerUsers>
  );
};

export default Users;
