import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {
  const { handlerPageChange, totalPages, page } = useContext(AppContext);

  return (
    <div>
      {page !== 1 && (
        <button onClick={() => handlerPageChange(1)}>Prev</button>
      )}

      {page !== totalPages && (
        <button onClick={() => handlerPageChange(totalPages)}>Next</button>
      )}

      <span>Page {page} of {totalPages}</span>
    </div>
  );
};

export default Pagination;
