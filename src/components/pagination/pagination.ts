import React, { useMemo } from "react";

type Props = {
  totalCount: number;
  pageSize: number;
  siblingsCount: number;
  currentPage: number;
};

const Pagination = ({
  totalCount,
  pageSize,
  siblingsCount = 1,
  currentPage,
}: Props) => {

  
  // Hook function to calculate the logic
  const paginationRange = useMemo(() => {

    const totalPageCount: number = Math.ceil(totalCount/ pageSize)

    const range = (start: number, end: number) => {
      let length = end - start + 1;
      /*
       An array of certain length and set the elements within it from
        start value to end value.
      */
      return Array.from({ length }, (_, idx) => idx + start);
    };
   }, [
    totalCount,
    pageSize,
    siblingsCount,
    currentPage,
  ]);

  return paginationRange;
};

export default Pagination;
