import React from "react";
import "../assets/styles/viewtrackers.css"
import sign from "../assets/images/sign.png";
const ViewTrackers=()=>{
    return(
        <div className="viewtrackers">
            <div className="tracker"><p className="viewtrackertxt"> View all trackers </p> </div>
            <div><img className="sign" src={sign}/></div>
        </div>
    )
}
export default ViewTrackers;