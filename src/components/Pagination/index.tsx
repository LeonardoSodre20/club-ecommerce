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
  return (
    <ContainerPagination>
      <ButtonControlPage>
        <ArrowBack />
      </ButtonControlPage>
      {Array.from({ length: pages }).map((_, index: number) => {
        return (
          <ButtonControlPage
            key={index}
            onChange={(ev: ChangeEvent<HTMLButtonElement>) => {
              setCurrentPage(Number(ev.target.value));
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
      <ButtonControlPage>
        <ArrowRight />
      </ButtonControlPage>
    </ContainerPagination>
  );
};

export default Pagination;
