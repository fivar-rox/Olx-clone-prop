import React from 'react'
import CategoryProducts from '../CategoryProducts/CategoryProducts'
import BannerImg from '../../Common/Images/banner.png'
import './Banner.css'

export default function Banner() {
  
  let [category, setCategory] = React.useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <select name="Category" onChange = {(evt) => setCategory(evt.target.value)}>
            {" "}
            <option value="null"> ALL CATEGORIES </option>
            <option value="Cars"> Cars </option>
            <option value="Cameras & Lenses"> Cameras & Lenses </option>
            <option value="Computers & Laptops"> Computers & Laptops </option>
            <option value="Mobile Phones"> Mobile Phones </option>
            <option value="Motorcycles"> Motorcycles </option>
            <option value="Tablets"> Tablets </option>
          </select>
          <div className="otherQuickOptions">
            <span onClick = {() => setCategory("Cars")}> Cars </span>
            <span onClick = {() => setCategory("Cameras & Lenses")}> Cameras & Lenses </span>
            <span onClick = {() => setCategory("Computers & Laptops")}> Computers & Laptops </span>
            <span onClick = {() => setCategory("Mobile Phones")}> Mobile Phones </span>
            <span onClick = {() => setCategory("Motorcycles")}> Motorcycles </span>
            <span onClick = {() => setCategory("Tablets")}> Tablets </span>
          </div>
        </div>
        <div className="banner">
          <img src={BannerImg} alt="" />
        </div>
      </div>
      { category != null ? <CategoryProducts category={category} /> : null }
    </div>
  )
  
}
