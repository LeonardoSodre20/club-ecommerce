import { Table, Th, THead, Tr } from "./styles";

// TYPES
import { IPropsTableProducts } from "./types";

const TableProducts = ({
  name,
  amount,
  status,
  price,
  created_at,
  actions,
  children,
}: IPropsTableProducts) => {
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

export default TableProducts;
