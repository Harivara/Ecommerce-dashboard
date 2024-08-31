import React from 'react'
import { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'



const Register = () => {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [phone,setPhone]= useState("")
const navigate=useNavigate()

    const handleSubmit =async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post("http://localhost:8080/user/register",{
                name,email,password,phone
            })
            if(res.data){
              alert("Registration Successful")
                navigate("/")
            }
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <>
          <div className="form-container" style={{ minHeight: "90vh", maxWidth:"50v" } }>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER</h4>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          
          <button type="submit" className="btn-submit" style={{marginLeft:"8vh"}}>
            REGISTER
          </button>
        </form>
      </div>
    </>
  )
}

export default Register