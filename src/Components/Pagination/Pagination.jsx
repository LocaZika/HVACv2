import { List, usePagination } from "@mui/material";
import './Pagination.scss';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Pagination({setPage, totalCount}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { items } = usePagination({count: totalCount});
  const handleClickPagination = (page) => {
    setCurrentPage(page);
    
  };
  useEffect(()=>{
    setPage(currentPage);
  },[currentPage])
  return (
    <List className="pagination">
      {
        items.map(({page, type, selected, ...item}, index) => {
          let children = null;
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <span>...</span>;
          } else 
          if (type === 'page') {
            children = (
              <button
                type="button"
                style={selected ? {
                  borderColor: '#db2d2e',
                  color: '#353535',
                } : {}}
                {...item}
              >{page}
              </button>
            );
          }
        return <li key={index} onClick={() => handleClickPagination(page)}>{children}</li>;
        })
      }
    </List>
  )
}
Pagination.propTypes = {
  setPage: PropTypes.func,
  totalCount: PropTypes.number,
}