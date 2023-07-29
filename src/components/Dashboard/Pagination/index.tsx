import * as S from "./styles";

// TYPES
import { IPropsPagination } from "./types";

const Pagination = ({ page, setPage, pageSize }: IPropsPagination) => {
  const handleNextPage = () => {
    setPage((prevValue) => prevValue + 1);
  };

  const handlePreviuosPage = () => {
    setPage((prevValue) => prevValue - 1);
  };

  return (
    <S.MainContainerPagination>
      <S.ContainerDataPagination>
        <S.ButtonPage
          disabled={page <= 1 ? true : false}
          bgColor={page <= 1 ? "rgba(0,0,0,0.15)" : ""}
          onClick={() => handlePreviuosPage()}
        >
          <S.IconPreviousPage />
        </S.ButtonPage>
        <S.Page>{page + 1}</S.Page>
        <S.ButtonPage
          disabled={page === pageSize ? true : false}
          bgColor={page === pageSize ? "rgba(0,0,0,0.15)" : ""}
          onClick={() => handleNextPage()}
        >
          <S.IconNextPage />
        </S.ButtonPage>
      </S.ContainerDataPagination>
    </S.MainContainerPagination>
  );
};

export default Pagination;