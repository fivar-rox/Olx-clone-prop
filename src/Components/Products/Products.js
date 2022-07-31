import React from 'react'
import { Link } from 'react-router-dom'
import { Firebase } from '../../firebase/config'
import ProductCards from '../ProductCards/ProductCards'
import { allProductsContext } from '../../ContextStore'
import './Products.css'

export default function Products() {
  const { setAllProducts } = React.useContext(allProductsContext)
  let [products, setProducts] = React.useState([]) //for showing all products in Descending order of date
  let [products2, setProducts2] = React.useState([]) //for showing all products in Ascending order of date
  let [loading, setLoading] = React.useState(false)
  let [loading2, setLoading2] = React.useState(false)
  
  React.useEffect(() => {
    setLoading(true);
    setLoading2(true)
    Firebase.firestore() //retreving all products from firebase in descending order
      .collection("products")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        let allProductsDescendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          }
        })
        setProducts2(allProductsDescendingOder) 
        setAllProducts(allProductsDescendingOder)
        setLoading(false)
      })

    Firebase.firestore() //retreving all products from firebase in asecnding order of date
      .collection("products")
      .orderBy("createdAt", "asc")
      .get()
      .then((snapshot) => {
        let allProductsAscendingOder = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          }
        })
        setProducts(allProductsAscendingOder)
        setLoading2(false)
      })
  }, [setAllProducts])

  let quickMenuCards = products.map((product, index) => {
    return(<div className="quick-menu-cards" key={index}> <ProductCards product={product} index={index} /> </div>);
  });

  let freshRecomendationCards = products2.map((product, index) => { if(index<4) {
    return (<div className="fresh-recomendation-card" key={index}> <ProductCards product={product} index={index} /> </div>);}
    return null 
  });

  return (
    <div className="postParentDiv">
      { products && 
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <Link to="./viewmore">
              {" "}
              <span>View more</span>{" "}
            </Link>
          </div>
          <div className="cards">
            {" "}
            {!loading  && quickMenuCards}
          </div>
        </div>
      }
     <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="fresh-recomendation-cards cards">{!loading2 && freshRecomendationCards}</div> 
      </div> 
    </div>
  )
}
