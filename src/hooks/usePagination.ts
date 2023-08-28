import { useState } from "react";

const usePagination = () => {
  const [pages, setPages] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(3);
  const [search, setSearch] = useState<string>("");

  return {
    pages,
    pageSize,
    search,
    setPages,
    setPageSize,
    setSearch,
  };
};

export { usePagination };
