import React from "react";
import "../assets/styles/scores.css";
import vec from "../assets/images/Vec.png";
import photo from "../assets/images/photo.png";
import line from "../assets/images/line.png";
const Score=()=>{
    return (
        <div className="scoreContainer">
            <div className="skinScore">
                <div><p className="overallss"> Overall Skin Score</p></div>
                <div className="sinScoreImg"><div>
                    <p className="score">45</p>
                    </div>
                    <div>
                        <div className="weeks"> <img src={vec} alt=" vector"/> <p> 5 Weeks</p></div>
                        <div className="weeks"> <img src={photo} alt=" photo"/> <p> 20 Uploads</p></div>
                    </div>
                  
                </div>
                <div><img className="line" src={line} alt=" line"/></div>
                <div><p className="week"> Week: 40/54</p></div>
            </div>
            <div className="hairTracker">
                <div><p className="ht"> Hair Tracker</p></div>
                <div>
                  <div className="hairTrackerImg"> <img className="vectorImg" src={vec} alt=" vector"/> <p> 5 Weeks</p></div>
                  <div className="hairTrackerImg"> <img className="photoImg" src={photo} alt=" photo"/> <p> 20 Uploads</p></div>
                </div>
                <div><img className="line" src={line} alt=" line"/></div>
                <div><p className="week"> Week: 40/54</p></div>
                
            </div>
        </div>
    )
}
export default Score;