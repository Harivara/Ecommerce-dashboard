// src/components/Card.js
import React from 'react';
import './Card.css';
import { FaDollarSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { TbShoppingBagPlus } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";

const iconMap = {
  orders: <TbShoppingBagPlus className="icon orders-icon" />,
  delivery: <GiShoppingBag className="icon delivery-icon" />,
  cancelled: <GiShoppingBag className="icon cancelled-icon" />,
  revenue: <FaDollarSign className="icon revenue-icon" />
};

const Card = ({ iconType, title, value, percentage, borderColor, backgroundColor, isUpward }) => {
  return (
    <div className="card" style={{ borderColor, backgroundColor }}>
      <div className="childcard1">
        {iconMap[iconType]}
        <div>
          <h3>{title}</h3>
          <div className="value" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{value}</p>
            <p className="percentage">
              {isUpward ? <FaArrowUp className="upward" /> : <FaArrowDown className="downward" />}
              {percentage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
