import React from "react";
import "../assets/styles/flexCard.css";
import "../assets/styles/productCard.css";
const FlexCard =({imgsource})=>{
    return(
       <div className="flexContainer">
          <div> <img src={imgsource} /></div>
       </div>
    )
}
export default FlexCard;