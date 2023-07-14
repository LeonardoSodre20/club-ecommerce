import { Dispatch, SetStateAction } from "react";

export interface IPropsPagination {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
}
