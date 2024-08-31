import React from 'react';
import './SidebarContent.css';
import CircularProgress from './CircularProgress';
import { FaArrowUp } from 'react-icons/fa';
const SidebarContent = () => {
  return (
    <div className="sidebar-content">
      <div className="childsidebar1">
        <div className="childsidebar111">Net Profit</div>
        <div className="childsidebar112">$6759.25</div>
        <div className="childsidebar113"> <FaArrowUp className="upward" />3%</div>
      </div>
      <div className="childsidebar2">
        <CircularProgress/>
      </div>
    </div>
  );
};

export default SidebarContent;
