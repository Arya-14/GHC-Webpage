import React from "react";
import FlexCard from "./FlexCard";
import skinTalk from "../assets/images/skinTalk.png";
import skinTalk4 from "../assets/images/skinTalk2.png";
import skinTalk2 from "../assets/images/skinTalk4.png";
import skinTalk3 from "../assets/images/skinTalk3.png";
import "../assets/styles/skintalk.css";

const Skintalk=()=>{
    return (
        <div>
            <div className="skinCaredescription">
                <p className="skinTalktxt"> Skin - Talk</p>
                <div> <p className="viewallbtn"> View all</p></div>
            </div>
            <div className="skinTalkContainer">
                <FlexCard imgsource={skinTalk}/>
                <FlexCard imgsource={skinTalk2}/>
                <FlexCard imgsource={skinTalk3}/>
                <FlexCard imgsource={skinTalk4}/>

            </div>
        </div>
        
    )
    
}
export default Skintalk;