// STYLE
import { Table, Th, THead, Tr } from "./styles";

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
            <Th>{name}</Th>
            <Th>{lastname}</Th>
            <Th>{email}</Th>
            <Th>{role}</Th>
            <Th>{created_at}</Th>
            <Th>{actions}</Th>
          </Tr>
        </THead>
        {children}
      </Table>
    </>
  );
};

export default TableUsers;
