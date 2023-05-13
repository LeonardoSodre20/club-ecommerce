import { THead, Table, Tr, Th } from "./styles";

// TYPES
import { IPropsTableCategories } from "./types";

const TableCategories = ({
  name,
  image,
  createdAt,
  actions,
  children,
}: IPropsTableCategories) => {
  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Th>{name}</Th>
            <Th>{image}</Th>
            <Th>{createdAt}</Th>
            <Th>{actions}</Th>
          </Tr>
        </THead>
        {children}
      </Table>
    </>
  );
};

export default TableCategories;
