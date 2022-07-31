import React from 'react'
import { useHistory } from 'react-router'
import ReactLoading from 'react-loading'
import Header from '../Header/Header';
import { Firebase } from "../../firebase/config"
import { authContext } from '../../ContextStore'
import './CreateProduct.css'

export default function CreateProduct() {

  const { user } = React.useContext(authContext);
  const history = useHistory();
  let [name, setName] = React.useState('');
  let [category, setCategory] = React.useState('');
  let [price, setPrice] = React.useState('');
  let [description, setDescription] = React.useState('');
  let [image, setImage] = React.useState('');
  let [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    if(name === ''){
      alert('Please enter a name')
      return
    }
    if(category === ''){
      alert('Please select the category')
      return
    }
    if(price === ''){
      alert('Please enter the price')
      return
    }
    if(description === ''){
      alert('Please enter the description')
      return
    }
    if(image === ''){
      alert('Please enter an image')
      return
    }
    setLoading(true);
    let date = new Date().toDateString()
    Firebase.storage().ref(`/image/${image.name}`).put(image)
    .then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        Firebase.firestore()
          .collection("products")
          .add({
            name,
            category,
            price,
            description,
            url,
            userId: user.uid,
            createdAt: date,
          })
          .then(() => {
            history.push("/")
          })
      })
    })
  }
  
  return (
    <React.Fragment>
      <Header />
      { loading ? <ReactLoading className="loadingCenter" color="grey" /> : 
      <div className="centerDiv">
        <label>Name</label>
        <br/>
        <input className="input" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br/>
        <label>Category</label>
        <br/>
        <select name="Category" onChange={(e) => setCategory(e.target.value)} className="input"> 
          <option>Select Category</option>
          <option value="Cars">Cars</option>
          <option value="Cameras & Lenses">Cameras & Lenses</option>
          <option value="Computers & Laptops">Computers & Laptops</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Tablets">Tablets</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input className="input" type="number" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label>Description</label>
        <br />
        <input className="input" type="text" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label> Image </label>
        {image && 
        <img alt="Products" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""} ></img>}
        <br />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}> upload and Submit </button>
      </div> 
      }
    </React.Fragment>
  )
}
