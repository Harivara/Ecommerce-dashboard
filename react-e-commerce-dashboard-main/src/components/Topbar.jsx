import React from 'react';
import './Topbar.css';
import { useNavigate } from 'react-router-dom';


const Topbar = () => {
  const Navigate=useNavigate()

const handleclick=()=>{
  Navigate("/profile")
}
  return (
    <div className="topbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="topbar-icons">
        <i className="fa fa-envelope"></i>
        <i class="fa fa-cog" aria-hidden="true"></i>
        <i className="fa fa-bell"></i>
        <div className="profile-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHE4vcD6O1-GAxEU2CDLEQlD140pQI94q5qA&s" alt="Profile1" onClick={handleclick} />
      </div>
      </div>
    </div>
  );
};

export default Topbar;
