'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router  = useRouter();
  const onPageChange = (page: number) => {
    router.push(`/todo/${page}`);
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        className="px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;