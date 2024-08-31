// src/components/Feedback.js
import React, { useEffect, useState} from 'react';
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {

  const [feeds,setFeeds]=useState([])

  useEffect(()=>{
    getfeeds()
  },[])

  const getfeeds=async()=>{
      try{
        const res=await axios.get("http://localhost:8080/feedback/get-feedback")
        if(res && res.data.success){
          setFeeds(res.data.feedback)
        }
      }
      catch(error){
        console.log("Error in feeds")
      }
  }

  const feedbacks = feeds.map((f)=>({
    customer: f.user.name,
    rating:f.star,
    feedback:f.description,
     profilePic: 'https://via.placeholder.com/20'
  }))
    

  return (
    <div className="feedback">
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className={`feedback-card ${index < feedbacks.length - 1 ? 'border-bottom' : ''}`}>
          <div className="customer-info">
            <img src={feedback.profilePic} alt={feedback.customer} className="profile-pic" />
            <h4>{feedback.customer}</h4>
          </div>
          <div className="rating">
            {'★'.repeat(feedback.rating)}
            {'☆'.repeat(5 - feedback.rating)}
          </div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
