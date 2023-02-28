import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { MainContainerUsers } from "./styles";
import { IUser } from "./types";

const Users = () => {
  const [users, setUsers] = useState<IUser[] | null>([]);

  const getAllUsers = async () => {
    const { data } = await api.get("/users");
    setUsers(data.users);
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
                    padding: "1.1rem",
                  }}
                >
                  {info.name}
                </td>
                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "1.1rem",
                  }}
                >
                  {info.lastname}
                </td>
                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "1.1rem",
                  }}
                >
                  {info.email}
                </td>

                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "1.1rem",
                  }}
                >
                  {info.role}
                </td>

                <td
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "0.8em",
                    padding: "1.1rem",
                  }}
                >
                  {format(new Date(info.created_at), "dd/MM/yyy", {
                    locale: ptBR,
                  })}
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
