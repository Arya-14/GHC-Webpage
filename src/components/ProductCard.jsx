import React from "react";
import "../assets/styles/productCard.css";
import stars from "../assets/images/star.png";
const ProductCard =({imgsrc})=>{
    return(
       <div className="cardContainer">
          <div> <img src={imgsrc} /></div>
          <div> <p> Anti -ageing Combo</p></div>
          <div className="reviews"> 
            <div><img src={stars}/></div>
            <div> <p> (4.7)</p></div>
          </div>
          <div><p> Rs. 999</p></div>
       </div>
    )
}
export default ProductCard;