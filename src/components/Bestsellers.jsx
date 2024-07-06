import React from "react";
import ProductCard from "./ProductCard";
import antiAgeing from "../assets/images/Antiageing.png";
import "../assets/styles/bestsellers.css";
const Bestsellers =()=>{
    return (
        <div>
            <div className="mydescription">
                <div><p className="bestsellertxt"> BestSellers</p></div>
                <div> <p className="viewall"> View all</p></div>
            </div>
            <div className="BestsellerContainer">
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
export default Bestsellers;