import React from "react";
import {
  ArrowBack,
  ArrowRight,
  ButtonControlPage,
  ContainerPagination,
} from "./styles";
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
    <ContainerPagination>
      <ButtonControlPage
        onClick={() => handlePreviousPage()}
        disabled={currentPage < 1}
      >
        <ArrowBack />
      </ButtonControlPage>
      {Array.from({ length: pages }).map((_, index: number) => {
        return (
          <ButtonControlPage
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
          </ButtonControlPage>
        );
      })}
      <ButtonControlPage
        onClick={() => handleNextPage()}
        disabled={currentPage + 1 === pages}
      >
        <ArrowRight />
      </ButtonControlPage>
    </ContainerPagination>
  );
};

export default Pagination;
