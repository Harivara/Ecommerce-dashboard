// src/components/MainContent.js
import React, { useEffect, useState } from 'react';
import './MainContent.css';
import axios from 'axios';




const MainContent = () => {

const [recentorders,setRecentorders]=useState([])

useEffect(()=>{
  handlerecentorders()
  
},[])

  const handlerecentorders=async()=>{
    try{
      const res=await axios.get("http://localhost:8080/order/getlatest")
      if(res &&res.data.success){
        setRecentorders(res?.data?.recent)
      }
    }
    catch(error){
      console.log("Error in recent orders frontend")
    }
}
const orders = recentorders.map((o) => ({
  customer: o.user.name,
  orderNo: o._id,
  orderName: o.name,
  amount: `$${o.amount}`,  
  status: o.status,
  profilePic: 'https://via.placeholder.com/40'
}));



  return (
    <div className="content">
      <h3>Recent Orders</h3>
      <table className="recent-orders">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Order Name.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="customer-info">
                <img src={order.profilePic} alt={order.customer} className="profile-pic" />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.orderName}</td>
              <td>{order.amount}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
