// src/components/SidebarContent.js
import React from 'react';
import './SidebarContent1.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import { TfiTarget } from "react-icons/tfi";
import { PiHamburgerFill } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

const SidebarContent1 = () => {
  const sidebarItems = [
    { iconClass: 'target-icon', text: 'Goal' },
    { iconClass: 'hamburger-icon', text: 'Popular Dishes' },
    { iconClass: 'dish-icon', text: 'Menus' },
  ];

  return (
    <div className="sidebar-content-container">
      {sidebarItems.map((item, index) => (
        <div className="sidebar-item" key={index}>
          <div className="item-content">
            <div className={`icon ${item.iconClass}`}>
              {item.iconClass === 'target-icon' && <TfiTarget />}
              {item.iconClass === 'hamburger-icon' && <PiHamburgerFill />}
              {item.iconClass === 'dish-icon' && <BiDish />}
            </div>
            <p className="content-text">{item.text}</p>
          </div>
          <div className="arrow-section">
            <FaArrowCircleRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarContent1;
