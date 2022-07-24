import React from 'react'
import { useHistory } from 'react-router-dom'
import { productContext } from '../../ContextStore'
import { Firebase } from '../../firebase/config'
import './ViewProduct.css'

export default function ViewProduct() {
  let { productInfo } = React.useContext(productContext)
  const [userDetails, setUserDetails] = React.useState()
  const history = useHistory()

  React.useEffect(() => {
    let { userId } = productInfo;
    if (userId === undefined) history.push("/");
    else {
      Firebase.firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => res.forEach((doc) => setUserDetails(doc.data())))
    }
  }, [history, productInfo])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={productInfo.url} alt="" />
      </div>{" "}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productInfo.price} </p>
          <span>{productInfo.name}</span>
          <p>{productInfo.category}</p>
          <span>{productInfo.createdAt}</span>
        </div>
        <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>{productInfo.description}</p>
        </div>
        { userDetails &&
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
          </div>
        }
      </div>
    </div>
  )
}
