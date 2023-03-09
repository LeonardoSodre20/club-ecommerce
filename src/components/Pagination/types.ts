import { Dispatch, SetStateAction } from "react";

export interface IPropsPagination {
  pages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
