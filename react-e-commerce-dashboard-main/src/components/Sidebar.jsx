import React from 'react';
import './Sidebar.css';
import { MdDashboard,MdOutlineNoteAlt } from "react-icons/md";
import { IoMdLogOut,IoMdHome } from "react-icons/io";
import { RiBookletLine, RiTodoLine, RiBarChartBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';



const Sidebar = () => {
  const Navigate=useNavigate()
  const [auth,setAuth]=useAuth()
  

  const logout = async()=>{
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    Navigate("/")
    alert("User successfully loggedout")
  }
  return (
    <div className="sidebar">
      <div className="top-icons">
        <div className="icon-container">
          <MdDashboard style={{ fontSize: 26, color: '#007BFF' }} className="icon" />
        </div>
        <div className="icon-container" onClick={()=>{Navigate("/home")}}>
        <IoMdHome />
        </div>
        <div className="icon-container" onClick={()=>{Navigate("/Graph")}}>
        <RiBarChartBoxLine />
        </div>
        <div className="icon-container" onClick={()=>{Navigate("/Todo")}}>
        <RiTodoLine />
        </div>
        <div className="icon-container" onClick={()=>{Navigate("/Orders")}}>
        <RiBookletLine />
        </div>
        <div className="icon-container" onClick={()=>{Navigate("/Feedback")}}>
        <MdOutlineNoteAlt />
        </div>
      </div>
      <div className="bottom-icon icon-container">
      <IoMdLogOut style={{color:'white'}} onClick={logout} />
      </div>
    </div>
  );
};

export default Sidebar;
