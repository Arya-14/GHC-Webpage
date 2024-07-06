import React from 'react';
import Navigation from './Navigation';
import Blogs from './Blogs';
import "../assets/styles/header.css";
import WellnessOverview from './WellnessOverview';
import Scores from './Scores';
import Sunscreen from './Sunscreen';
import Bestsellers from './Bestsellers';
import FooterAction from './FooterAction';
import SkinCare from './SkinCare';
import HairCare from './HairCare';
import UnderstandingHiar from './UnderstandingHiar';
import Skintalk from './Skintalk';
import Advertisement from './Advertisement';
import ViewTrackers from './ViewTrackers';
import FlexCard from './FlexCard';

const Header = () => {
  return (
    <header className="header">
      <Navigation/>
      <Blogs/>
      <WellnessOverview/>
      <Scores/>
      <ViewTrackers/>
      <Sunscreen/>
      <Bestsellers/>
      <HairCare/>
      <UnderstandingHiar/>
      <SkinCare/>
      <Skintalk/>
      <Advertisement/>
      <FooterAction/>
      {/* <div className="welcome-container">
        <span className="welcome">Welcome, June!</span>
      </div>
      <nav className="nav">
        <img src={trackLogo} alt="Track" />
        <img src={walletLogo} alt="Wallet" />
        <img src={blogsLogo} alt="Blogs" />
        <img src={consultLogo} alt="Consult" />
      </nav> */}
    </header>
  );
};

export default Header;