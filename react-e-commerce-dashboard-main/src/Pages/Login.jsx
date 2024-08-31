import React from 'react'
import { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'


const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [auth,setAuth]=useAuth()
  const Navigate =useNavigate()
  
  const handleSubmit =async(e)=>{
    e.preventDefault()
    try{
        const res=await axios.post("http://localhost:8080/user/login",{
            email,password
        })
       if(res.data.success){
        setAuth({...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        Navigate("/dashboard")
       }
       else{
        alert(res.data.message)
       }
    }
    catch(error){
        console.log(error)
    }
    }
  return (
    <>
          <div className="form-container" style={{ minHeight: "90vh", maxWidth:"50v" } }>
          <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN</h4>
         
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
         
          <div className='button-login'>
          <button type="submit" className="btn-submit">
            Login
          </button>
        
          </div>
        </form>
        <button type="submit" className="btn-submit" style={{margin:"2vh"}} onClick={()=>Navigate("/register")}>
            Register
          </button>
      </div>
    </>
  )
}

export default Login