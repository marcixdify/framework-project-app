import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
user-select: none;
  
ul {
list-style: none;
margin: 20px 0;
display: flex;
width: 100%;
justify-content: center;
column-gap: 15px;
  
  a {
    cursor: pointer
  }
  
  li.selected {
    font-weight: bold;
  }
}
`;


interface Props {
  pageRangeDisplayed: number;
  pageCount: number;
  marginPagesDisplayed: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<Props> = (props) => (
    <PaginationWrapper>
        <ReactPaginate {...props} />
    </PaginationWrapper>
)

export default Pagination;
