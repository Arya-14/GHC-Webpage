import React from "react";
import ProductCard from "./ProductCard";
import CareProduct from "../assets/images/careProducts.png";
import CareProduct2 from "../assets/images/careProducts2.png";
import "../assets/styles/hairCare.css";
import "../assets/styles/bestsellers.css";
const HairCare =()=>{
    return (
        <div>
            <div className="haircaredescription">
                <div><p className="hairCaretxt"> Hair Care</p></div>
                <div> <p className="viewalltxt"> View all</p></div>
            </div>
            <div className="HairCareContainer">
                <ProductCard imgsrc={CareProduct}/>
                <ProductCard imgsrc={CareProduct2}/>
                <ProductCard imgsrc={CareProduct}/>
                <ProductCard imgsrc={CareProduct2}/>
                <ProductCard imgsrc={CareProduct}/>
                <ProductCard imgsrc={CareProduct2}/>
            </div>

        </div>
    )
}
export default HairCare;