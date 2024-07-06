import React from "react";
import FlexCard from "./FlexCard";
import hairTalk from "../assets/images/hairTalk.png";
import hairCare5 from "../assets/images/hairCare5.png";
import "../assets/styles/understandinghiar.css";

const UnderstandingHiar=()=>{
    return (
        <div>
            <div className="skinCaredescription">
                <p className="hairtxt"> Understanding Hair</p>
                <div> <p className="viewallbtn"> View all</p></div>
            </div>
            <div className="hairTalkContainer">
                <FlexCard imgsource={hairTalk}/>
                <FlexCard imgsource={hairCare5}/>
                <FlexCard imgsource={hairTalk}/>
                <FlexCard imgsource={hairCare5}/>

            </div>
        </div>
        
    )
    
}
export default UnderstandingHiar;