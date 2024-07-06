import React from "react";
import trackLogo from '../assets/images/consult.png'; // Assuming your image filename
import walletLogo from '../assets/images/logo3.png';
import blogsLogo from '../assets/images/logo2.png';
import consultLogo from '../assets/images/logo1.png';
import "../assets/styles/Blogs.css";

const Blogs = ()=>{
    return(
        <div>
            <div>
                <p className="logTitle"> Welcome <span className="june">June!</span></p>
            </div>
            <div className="myLogs">
                <div > <img className="consult" src={trackLogo} alt="Track" /></div>
                <div><img src={walletLogo} alt="Wallet" /></div>
                <div> <img src={blogsLogo} alt="Blogs" /></div>
                <div><img src={consultLogo} alt="Consult" /></div>
            </div>
            
        </div>
    )
}

export default Blogs;