import React from "react";

// STYLES
import * as S from "./styles";

// TYPES
import { IPropsPagination } from "./types";

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: IPropsPagination) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <S.ContainerPagination>
      <S.ButtonControlPage
        onClick={() => handlePreviousPage()}
        disabled={currentPage < 1}
      >
        <S.ArrowBack />
      </S.ButtonControlPage>
      {Array.from({ length: pages }).map((_, index: number) => {
        return (
          <S.ButtonControlPage
            bgColor={currentPage === index ? "#000" : ""}
            colorFont={currentPage === index ? "#fff" : ""}
            key={index}
            type="button"
            value={index}
            onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
              setCurrentPage(Number(ev.currentTarget.value));
            }}
          >
            {index + 1}
          </S.ButtonControlPage>
        );
      })}
      <S.ButtonControlPage
        onClick={() => handleNextPage()}
        disabled={currentPage + 1 === pages}
      >
        <S.ArrowRight />
      </S.ButtonControlPage>
    </S.ContainerPagination>
  );
};

export default Pagination;
