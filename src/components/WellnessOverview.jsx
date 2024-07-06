import React from "react";
import "../assets/styles/wellnessOverview.css";
import healthIcon from "../assets/images/healthicons_weight.png";
import waterDrop from "../assets/images/ic_baseline-water-drop.png";
import vector from "../assets/images/Vector.png";
const WellnessOverview =()=>{
    return(
        <div className="overviewContainer">
            <div className="overview">
                <div> <p className="title"> Wellness Overview:</p></div>
                <div className="overWeight"><p className=" weight"> 40</p> <div>
                    <p className="overWeightText">OverWeight</p>
                    </div></div>
                <div> <p> Your current BMI</p></div>
            </div>
            <div className="wellnessIcon">
                <div className="healthIcon"><img className="myIcon" src={healthIcon} alt="healthIcon"/> <p className="wieght"> 80.5 kgs</p></div>
                <div className="healthIcon"><img className="myIcon" src={waterDrop} alt="waterdrop"/> <p className="wieght"> 7/8 Hours</p></div>
                <div className="healthIcon"><img className="myIcon" src={vector} alt="vector"/> <p className="wieght"> 4/8 Glasses</p></div>
            </div>
        </div>
    )
}

export default WellnessOverview;