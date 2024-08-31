import React, { useState } from 'react'
import '../Pages/login.css'
import { useAuth } from '../context/auth.jsx'
import axios from 'axios'

const Writefeedback = () => {
    const [auth,setAuth]=useAuth()
    const [rating,setRating]=useState("")
    const [desc,setDesc]=useState("")

const handlesubmit=async(e)=>{
    e.preventDefault()
    try{
        const res=await axios.post("http://localhost:8080/feedback/create-feedback",{
            user:auth.user._id,
            star:rating,
            description:desc
        })
        if(res && res.data.success){
            alert("Feedback Submitted")
            setRating("")
            setDesc("")
        }
    }
    catch(error){
        console.log("Error in creating feeback")
    }
}

  return (
    <>
    
    <h1 className='title'>Customer Feedback</h1>
    <div style={{display:'flex', flexDirection:"column", width:"30vh", marginLeft:"10vh", justifyContent:"center"}}>
    <p style={{color:"white", marginLeft:"5vh"}}>Username : {auth?.user?.name?auth.user.name:"No user Logined"}</p>

    <textarea style={{width:"100vh", height:"20vh", marginBottom:"2vh"}}
    type="textarea"
    placeholder='Please write your Feedback'
    rows="5"
    cols="50"
    required:true
    value={desc} onChange={(e)=>setDesc(e.target.value)}
    ></textarea>
    <input className='form-control'
    type='text'
    placeholder='Rating out of 5'
    value={rating}
    required:true
    onChange={(e)=>setRating(e.target.value)}>
    </input>
    <button style={{marginLeft:"30vh", width:"30vh"}} onClick={handlesubmit}>Submit</button>
    
    </div>
    </>
  )
}

export default Writefeedback