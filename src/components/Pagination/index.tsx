import { ChangeEvent } from "react";
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
            key={index}
            onClick={(ev: any) => {
              setCurrentPage(Number(ev.target.value));
            }}
            type="button"
            value={index}
            style={
              currentPage === index
                ? {
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "0.9em",
                  }
                : undefined
            }
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
