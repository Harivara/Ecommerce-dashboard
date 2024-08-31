import React, { useEffect, useState } from 'react'
import '../Pages/login.css'
import { useAuth } from '../context/auth.jsx'
import { Select } from 'antd'
const {Option} = Select
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
    const [auth,setAuth]=useAuth()
    const [amount, setAmount]=useState("")
    const [ordername, setOrdername]=useState("")
    const [o_status, setO_status]=useState("")
    const [orders,setOrders]=useState([])
    const [orderid,setOrderid]=useState(null)
    const [soloorder,setSoloorder]=useState(null)
    const Navigate= useNavigate()

  

    useEffect(() => {
        getAllOrders();
      }, []);

      useEffect(()=>{
        getsingleorder()
        // eslint-disable-nextline
      },[orderid])
    
      // Function to fetch all orders
      const getAllOrders = async () => {
        try {
          const res = await axios.get("http://localhost:8080/order/all-orders");
          if (res && res.data.success) {
            setOrders(res.data.orders); // Set the orders state
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    //   // useEffect to monitor changes to 'orders' state
    //   useEffect(() => {
    //     if (orders.length > 1) {
    //       console.log("Number of orders:", orders.length);
    //       console.log("Second order object:", orders[1]); // Log the entire second order object
    // console.log("Second order name:", orders[7].name);
    //     }
    //   }, [orders]); // This effect runs every time 'orders' state changes

    const handleupdate= async ()=>{
        try{
            const res=await axios.put(`http://localhost:8080/order/order-update/${orderid}`,{
                status:o_status})
                if(res && res.data.success){
                    alert("Order updated")
                    setO_status("")
                    setOrderid("")
                }
            
        }
        catch(error){
            console.log("Error in update react")
        }
    }

const handleplaced =async (e)=>{
    e.preventDefault();
    try{
    const res=await axios.post("http://localhost:8080/order/create-order",{
        user:auth?.user?._id,
        amount:amount,
        name:ordername
    })
    if(res && res.data.success){
        alert(`Order "${res?.data?.order?.name}" is created`)
        setOrdername("")
            setAmount("")
    }else{
        console.log(res.data.message)
    }    
}
catch(error){
    console.log("Error in creating Order",error)
}
}
const getsingleorder = async () => {
    try {
        
        const res = await axios.get(`http://localhost:8080/order/single-order/${orderid}`);
        
        if (res.data && res.data.success) {
            setSoloorder(res.data.singleorder); // Set the order data to state
            // {console.log(res.data.singleorder.name)}
        } else {
            console.log("No order found or request failed.");
        }
    } catch (error) {
        console.log("Error in frontend:", error.message); // Log the error message
    }
};


  return (
      <>
      <h1 className='title'>Orders</h1>
    <div style={{display:'flex', flexDirection:"row"}}>
    <div style={{display:'flex', flexDirection:"column", width:"30vh", marginLeft:"10vh"}}>
    <p style={{color:"white",marginLeft:"5vh"}}>CREATE ORDER</p>
    <p style={{color:"white", marginLeft:"5vh"}}>Username : {auth?.user?.name?auth.user.name:"No user Logined"}</p>
    <input
    type='text'
    placeholder='Order Name'
    className='form-control'
    value={ordername}
    onChange={(e)=>{setOrdername(e.target.value)}}
    ></input>
    <input
    type='text'
    placeholder='Order Amount'
    className='form-control'
    value={amount}
    onChange={(e)=>{setAmount(e.target.value)}}
    ></input>
    <button style={{height:"5vh"}} onClick={handleplaced}>Place Order</button>
    
    </div>
    <div style={{display:'flex', flexDirection:"column", width:"30vh", marginLeft:"10vh"}}>
    <p style={{color:"white",marginLeft:"5vh"}}>UPDATE ORDER</p>
    <Select placeholder="Order Id" value={orderid} onChange={(value)=>{setOrderid(value)}}>
  {orders.map((o) => (
    <Option key={o._id} value={o._id}>
      {o._id}
    </Option>
  ))}
</Select>

    <p style={{color:"white", width:"40vh", fontSize:"15px" , marginTop:"5vh"}}>OrderName :{orderid?(<>{soloorder?.name}</>):(<>{"No Order selected"}</>)} </p>
    {console.log(soloorder?.name)} 

    <Select placeholder="Status" style={{marginTop:"3vh", height:"6vh"}} value={o_status} onChange={(value)=>{setO_status(value)}}>
        <Option value="Pending">Pending</Option>
        <Option value="Delivered">Delivered</Option>
        <Option value="Canceled">Canceled</Option>
    </Select>
    
    <button style={{marginTop:"2vh", height:"5vh"}} onClick={handleupdate}>Update Order</button>
    
    </div>
    <div>
    <button style={{marginTop:"20vh", marginLeft:"10vh", height:"5vh"}} onClick={()=>{Navigate("/dashboard")}}>Back to Dashboard</button>
    </div>
    </div>
  
    </>
  )
}

export default Home