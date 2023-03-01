import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { IconDelete, IconEdit } from "../Dashboard/styles";
import { MainContainerUsers } from "./styles";
import { IUser } from "./types";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getAllUsers = async () => {
    const { data } = await api.get("/users");
    setUsers(data.users);
  };

  const deleteUsersById = async (id: string) => {
    const response = await api.delete(`/users/${id}`);
    setUsers(users?.filter((info) => info._id !== id));
    toast.success(response.data.message);
    return response.data;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <MainContainerUsers>
      <table
        style={{
          backgroundColor: "#000",
          color: "#fff",
          width: "80%",
          marginLeft: "60px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              Nome
            </th>
            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              Sobrenome
            </th>
            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              E-mail
            </th>
            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              Permissão
            </th>
            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              Data de Cadastro
            </th>

            <th
              style={{
                width: "200px",
                padding: "8px",
                color: "#fff",
              }}
            >
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {users?.map((info) => {
            return (
              <tr
                key={info._id}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  {info.name}
                </td>
                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  {info.lastname}
                </td>
                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  {info.email}
                </td>

                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  {info.role}
                </td>

                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  {format(new Date(info.created_at), "dd/MM/yyy", {
                    locale: ptBR,
                  })}
                </td>

                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "0.8rem",
                  }}
                >
                  <IconEdit />
                  <IconDelete onClick={() => deleteUsersById(info._id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </MainContainerUsers>
  );
};

export default Users;
