import React from "react";
import ProductCard from "./ProductCard";
import antiAgeing from "../assets/images/Antiageing.png";
import "../assets/styles/skinCare.css";
const SkinCare =()=>{
    return (
        <div>
            <div className="skinCaredescription">
                <div><p className="skinCaretxt"> Skin Care</p></div>
                <div> <p className="viewallbtn"> View all</p></div>
            </div>
            <div className="SkinCareContainer">
                <ProductCard imgsrc={antiAgeing}/>
                <ProductCard imgsrc={antiAgeing}/>
                <ProductCard imgsrc={antiAgeing}/>
                <ProductCard imgsrc={antiAgeing}/>
                <ProductCard imgsrc={antiAgeing}/>
                <ProductCard imgsrc={antiAgeing}/>
            </div>

        </div>
    )
}
export default SkinCare;