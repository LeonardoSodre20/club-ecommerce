// STYLE
import { Table, Td, THead, Tr } from "./styles";

// TYPES
import { IPropsTableUsers } from "./types";

const TableUsers = ({
  name,
  lastname,
  email,
  role,
  created_at,
  actions,
  children,
}: IPropsTableUsers) => {
  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Td>{name}</Td>
            <Td>{lastname}</Td>
            <Td>{email}</Td>
            <Td>{role}</Td>
            <Td>{created_at}</Td>
            <Td>{actions}</Td>
          </Tr>
        </THead>
        {children}
      </Table>
    </>
  );
};

export default TableUsers;
