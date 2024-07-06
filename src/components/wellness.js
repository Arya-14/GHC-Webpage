import React, { useState, useEffect } from "react";
import wellnessImg from "../assets/images/wellness.png";
import skinImg from "../assets/images/skin.png";
import hairImg from "../assets/images/hair.png";
import viewAllTrackers from "../assets/images/trackers.png";
import sunscreenImg from "../assets/images/sunscreen.png";
import viewAll from "../assets/images/viewAll.png";
import bestSellerImg from "../assets/images/bestSellers.png";
import hairCare2Img from "../assets/images/hairCare2.png";
import hairCareImg from "../assets/images/hair.png";


const WellnessOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const element = document.getElementById("view-trackers"); // Assuming ID for viewAllTrackers image
    const elementTop = element.offsetTop;
    setIsVisible(scrollTop > elementTop); // Update sunscreen visibility based on scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

//   const hairImages = [
//     { id: 1, src: "../assets/images/hairTalk.png", alt: "Hair Image 1" },
//     { id: 2, src: "../assets/images/hairTalk2.png", alt: "Hair Image 2" },
//     { id: 3, src: "../assets/images/hairTalk3.png", alt: "Hair Image 3" },
//     { id: 4, src: "../assets/images/hairTalk4.png", alt: "Hair Image 4" },
//   ];

//   const [displayedHairImages, setDisplayedHairImages] = useState(hairImages.slice(0, 2));
//   const [showSwipeRight, setShowSwipeRight] = useState(hairImages.length > 2);

//   const handleSwipeRight = () => {
//     const newDisplayedImages = displayedHairImages.concat(
//       hairImages.slice(displayedHairImages.length, displayedHairImages.length + 2)
//     );
//     setDisplayedHairImages(newDisplayedImages);
//     setShowSwipeRight(newDisplayedImages.length < hairImages.length);
//   };

  return (
    <section className="wellness-overview">
      <img src={wellnessImg} alt="Wellness Overview" />
      <div className="trackers">
        <img src={skinImg} alt="Skin Score" />
        <img src={hairImg} alt="Hair Tracker" />
      </div>
      <img src={viewAllTrackers} alt="View All Trackers" id="view-trackers" className="view-all-trackers" />
      {isVisible && <img src={sunscreenImg} alt="Sunscreen" className="sunscreen-img" />}
      <div className="bestsellers">
        <span>Bestsellers</span>
        <img src={viewAll} alt="View All" className="view-all" />
      </div>
      <div className="products-container">
        <img src={bestSellerImg} alt="Anti-ageing Combo" />
        <img src={bestSellerImg} alt="Anti-ageing Combo" />
      </div>
      <div className="bestsellers">
        <span>Hair Care</span>
        <img src={viewAll} alt="View All" className="view-all" />
      </div>
      <div className="products-container">
        <img src={hairCareImg} alt="Anti-ageing Combo" />
        <img src={hairCare2Img} alt="Anti-ageing Combo" />
      </div>

      <div className="bestsellers">
        <span>Understanding Hair</span>
        <img src={viewAll} alt="View All" className="view-all" />
      </div>
      {/* <div className="hair-carousel">
        {displayedHairImages.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} className="hair-image" />
        ))}
        {showSwipeRight && <button onClick={handleSwipeRight}>Swipe Right</button>}
      </div> */}
    </section>
  );
};

export default WellnessOverview;