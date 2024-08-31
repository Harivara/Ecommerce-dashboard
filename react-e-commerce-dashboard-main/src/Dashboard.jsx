import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Card from './components/Card';
import SidebarContent from './components/SidebarContent';
import ActivityChart from './components/ActivityChart';
import SidebarContent1 from './components/SidebarContent1';
import MainContent from './components/MainContent';
import Feedback from './components/Feedback';
import axios from 'axios';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderD, setOrderD] = useState(0);
  const [orderC, setOrderC] = useState(0);
  const [revenue, setRevenue] = useState(0);

  // Fetch orders on component mount
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8080/order/all-orders");
        if (res && res.data.success) {
          setOrders(res.data.orders);
          setTotal(res.data.total);
        }
      } catch (error) {
        console.error("Error in getOrders", error);
      }
    };

    getOrders();
  }, []); // Empty dependency array means this useEffect runs only once, on mount

  // Process orders whenever they change
  useEffect(() => {
    if (orders.length > 0) {
      // Filter delivered orders and set the count
      const delivered = orders.filter(order => order.status === "Delivered");
      setOrderD(delivered.length);

      // Calculate total revenue from delivered orders
      let t = 0;
      delivered.forEach(ele => {
        t += ele.amount;
      });
      setRevenue(t);

      // Filter canceled orders and set the count
      const cancelled = orders.filter(order => order.status === "Canceled");
      setOrderC(cancelled.length);
    }
  }, [orders]); // This useEffect runs every time 'orders' changes

  return (
    <div className="container">
      <Sidebar />
      <div className="content-container">
        <Topbar />
        <div className="row row1">
          <div className="column main-column">
            <div className="content1">
              <Card
                iconType="orders"
                title="Total Orders"
                value={total}
                percentage="3%"
                isUpward={true}
              />
              <Card
                iconType="delivery"
                title="Total Delivered"
                value={orderD}
                percentage="-3%"
                isUpward={false}
              />
              <Card
                iconType="cancelled"
                title="Total Cancelled"
                value={orderC}
                percentage="1%"
                isUpward={true}
              />
              <Card
                iconType="revenue"
                title="Total Revenue"
                value={revenue}
                percentage="5%"
                isUpward={false}
              />
            </div>
          </div>
          <div className="column side-column">
            <SidebarContent />
          </div>
        </div>
        <div className="row row2">
          <div className="column main-column">
            <div className="content2">
              <ActivityChart />
            </div>
          </div>
          <div className="column side-column">
            <div className="sidebar-content">
              <SidebarContent1 />
            </div>
          </div>
        </div>
        <div className="row row3">
          <div className="column main-column">
            <div className="content">
              <MainContent />
            </div>
          </div>
          <div className="column side-column">
            <div className="sidebar-content">
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
