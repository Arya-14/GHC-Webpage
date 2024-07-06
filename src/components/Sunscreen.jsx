import React from "react";
import { Carousel } from "@kkx64/react-simple-carousel";
import sunscreen from "../assets/images/sunscreen.png";
import summerHairCare from "../assets/images/summerHairCare.png";
import "../assets/styles/sunscreen.css";

const Sunscreen=()=>{
    return (
        <Carousel >
            <div>
                <img className="legend" src={summerHairCare} />
            </div>
            <div>
                <img className="legend" src={summerHairCare} />
            </div>
            <div>
                <img className="legend" src={summerHairCare} />
            </div>

        </Carousel>
    )
    
}
export default Sunscreen;