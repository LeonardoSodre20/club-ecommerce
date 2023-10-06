import { useEffect, useState } from "react";

// FORMATTERS
import { formatDate } from "@src/utils/formatters";

// COMPONENTS
import ModalCreateCategory from "@src/components/Dashboard/ModalCreateCategory";
import TableDefault from "@src/components/Table";

// STYLES
import * as S from "./styles";

// HOOKS
import useCategory from "@src/hooks/useCategory";


// TH CATEGORIES
const theadNames = ["Nome", "Imagem", "Data de criação", "Ações"];

const Categories = () => {
  const { data } = useCategory();

  return (
    <S.MainContainer>
      <ModalCreateCategory />
      <TableDefault data={theadNames}>
        <tbody>
          {data?.map((item) => ( 
              <S.Tr key={item.id}>
                <S.Td>{item["name"]}</S.Td>
                <S.Td>
                  <S.ImageCategory
                    src={`${item["image"]}`}
                    alt="image-category"
                  />
                </S.Td>
                <S.Td>{formatDate(item["created_at"])}</S.Td>
                <S.Td>teste</S.Td>
              </S.Tr>
            )
          )}
        </tbody>
      </TableDefault>
    </S.MainContainer>
  );
};

export default Categories;
