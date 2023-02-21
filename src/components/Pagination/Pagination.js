import React from 'react';
import { PaginationContainer, PaginationItem } from './Pagination.styled';
export const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map(number => (
        <PaginationItem key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
};
