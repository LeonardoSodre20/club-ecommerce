import { ButtonControlPage, ContainerPagination } from "./styles";
// TYPES
import { ChangeEvent } from "react";
import { IPropsPagination } from "./types";

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: IPropsPagination) => {
  return (
    <ContainerPagination>
      {Array.from({ length: pages }).map((_, index: number) => {
        return (
          <ButtonControlPage
            key={index}
            onClick={(ev: ChangeEvent<EventTarget>) => {
              setCurrentPage(Number(ev.target));
            }}
            type="button"
            value={index}
            style={
              currentPage === index
                ? {
                    backgroundColor: "#000",
                    color: "#fff",
                  }
                : undefined
            }
          >
            {index + 1}
          </ButtonControlPage>
        );
      })}
    </ContainerPagination>
  );
};

export default Pagination;
