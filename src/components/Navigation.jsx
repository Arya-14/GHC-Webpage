import React from "react";
import saturn from "../assets/images/saturn.png";
import cart from "../assets/images/cart.png";
import "../assets/styles/Navigation.css";

const Navigation =() =>{
    return (
        <div className="mynavigation">
            <div>
                <div className="dottedCircle">
                    

                </div>
            </div>
            <div>
               <img src={saturn} alt="saturn" className="saturn" />

            </div>
            <div>
                 <img src={cart} alt="cart" className="cart" />
            </div>
        </div>
    )
}

export default Navigation;