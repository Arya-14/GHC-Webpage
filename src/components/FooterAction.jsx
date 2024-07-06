import React from "react";
import "../assets/styles/footerAction.css";
import home from "../assets/images/home.png";
import track from "../assets/images/track.png";
import search from "../assets/images/search.png";
import account from "../assets/images/account.png";
const FooterAction =()=>{
    return(
        <div className="footerContainer">
            <div> <img src={home}/></div>
            <div><img src={track}/></div>
            <div><img src={search}/></div>
            <div><img src={account}/></div>
        </div>
    )
}
export default FooterAction;