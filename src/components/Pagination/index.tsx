import { ChangeEvent } from "react";
import {
  ArrowBack,
  ArrowRight,
  ButtonControlPage,
  ContainerPagination,
} from "./styles";
// TYPES

import { IPropsPagination } from "./types";

let MAX_BUTTONS_VISIBLE = 5;

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
      {Array.from({ length: Math.min(MAX_BUTTONS_VISIBLE, pages) }).map(
        (_, index: number) => {
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
        }
      )}
      <ButtonControlPage>
        <ArrowRight />
      </ButtonControlPage>
    </ContainerPagination>
  );
};

export default Pagination;
