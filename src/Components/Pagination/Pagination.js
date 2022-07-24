import React from 'react'
import { allProductsContext } from '../../ContextStore'
import './Pagination.css'

export default function Pagination({ setCurrentPage }) {
  const { allProducts } = React.useContext(allProductsContext)
  let [activeItem, setActiveItem] = React.useState('')
  let numberOfPages = []
  let itemsPerPage = 8
  for (let i = 1; i <= Math.ceil(allProducts.length / itemsPerPage); i++) numberOfPages.push(i)

  const showNextPage = (e) => {
    let clickedPage = e.target.id
    setCurrentPage(clickedPage)
    setActiveItem(Number(clickedPage))  
  }

  let pagination = numberOfPages.map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        id={pageNumber}
        className={activeItem === pageNumber ? "active" : ""}
        onClick={showNextPage}
      >
        {pageNumber}
      </li>
    )
  })
  return <div className="pagination">{pagination}</div>
}
