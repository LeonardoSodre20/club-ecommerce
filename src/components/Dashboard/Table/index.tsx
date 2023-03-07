import { Table, Th, THead, Tr } from "./styles";

// TYPES
import { IPropsTableComponent } from "./types";

const TableGeneric = ({
  name,
  amount,
  status,
  price,
  created_at,
  actions,
  children,
}: IPropsTableComponent) => {
  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>{name}</Th>
            <Th>{amount}</Th>
            <Th>{status}</Th>
            <Th>{price}</Th>
            <Th>{created_at}</Th>
            <Th>{actions}</Th>
          </Tr>
        </THead>
        {children}
      </Table>
    </>
  );
};

export default TableGeneric;
