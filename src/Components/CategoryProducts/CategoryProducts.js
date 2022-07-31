import React from 'react'
import ProductCards from '../ProductCards/ProductCards'
import { allProductsContext } from '../../ContextStore' 
import './CategoryProducts.css'

export default function CategoryProducts({category}) {

  const { allProducts } = React.useContext(allProductsContext)

  let productCards = allProducts.filter((item) => item.category === category).map((product, index) => {
    return ( <ProductCards product={product} index={index} key={index} /> )
  })
  
  return (
    <>
    { category !== null ? 
      <div className="moreView">
        <div className="heading">
          <span>{category}</span>
        </div> 
        <div className="cards">{productCards}</div>
      </div>
      : null
    } 
    </>
  )
 
}
