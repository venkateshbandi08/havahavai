import React from "react";
import "./index.css";
import { IoMdHome } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top-section">
        <div className="top-item">
          <IoMdHome className="sidebar-icon" />
          <p className="sidebar-option-name"> Home </p>
        </div>
        <div className="top-item">
          <PiDotsNineBold className="sidebar-icon" />
          <p className="sidebar-option-name"> Dashboard </p>
        </div>
      </div>
      <div className="sidebar-top-section">
        <div>
          <h4 className="sidebar-option-name"> Services </h4>
        </div>
        <div className="top-item selected-option">
          <p className="sidebar-option-name"> Airports </p>
        </div>
        <div className="top-item">
          <p className="sidebar-option-name"> Videos </p>
        </div>
      </div>
      <ul className="sidebar-top-section">
        <li>
          <h4 className="sidebar-option-name"> Others </h4>
        </li>
        <li className="top-item">
          <p className="sidebar-option-name"> list 1 </p>
        </li>
        <li className="top-item">
          <p className="sidebar-option-name"> list 2 </p>
        </li>
        <li className="top-item">
          <p className="sidebar-option-name"> list 3 </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
