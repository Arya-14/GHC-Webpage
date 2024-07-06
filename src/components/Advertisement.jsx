import React from "react";
import "../assets/styles/advertisement.css"
import instagram from "../assets/images/instagram.png";
import sign from "../assets/images/sign.png";
const Advertisement=()=>{
    return(
        <div className="instagram">
            <div> <img className="insta" src={instagram}/></div>
            <div className="socialmediaad"><p className="ad"> Join our 10K family on Instagram </p> </div>
            <div><img className="sign" src={sign}/></div>
        </div>
    )
}
export default Advertisement;