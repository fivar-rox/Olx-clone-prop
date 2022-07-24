import React from 'react'
import { useHistory } from 'react-router'
import { allProductsContext } from '../../ContextStore'
import Pagination from '../Pagination/Pagination'
import ProductCards from '../ProductCards/ProductCards'
import './ViewAllProducts.css';

export default function ViewAllProducts() {
  const { allProducts } = React.useContext(allProductsContext)
  
  let length = allProducts.length
  const history = useHistory()

  let [currentPage, setCurrentPage] = React.useState(1)
  let itemsPerPage = 8
  let indexOfLastProduct = currentPage*itemsPerPage
  let indexOfFirstProduct = indexOfLastProduct-itemsPerPage
  let items = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  let products = items.map((product, index) => {
    return (
      <div className="all-post-card" key={index}>
        {" "}
        <ProductCards product={product} index={index} />{" "}
      </div>
    )
  })

  return (
    <>
      { length !== 0 ? 
        <div className="display-all-parent">
          <div className="container-allpost">{products}</div>
          <Pagination setCurrentPage={setCurrentPage}/>
        </div>
        : history.push("/")
      }
    </>
  )
}
