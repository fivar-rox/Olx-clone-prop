import React from 'react'
import { useHistory } from 'react-router-dom'
import Heart from '../../Common/Heart'
import { productContext } from '../../ContextStore'
import './ProductCards.css'

export default function ProductCards({product, index}) {
    let { setProductInfo } = React.useContext(productContext)
    const history = useHistory()

    return (
      <div className="card" key={index} onClick={() => {
        setProductInfo(product)
        history.push("/view")
      }}>
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="category"> {product.category} </span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>
    )
}

