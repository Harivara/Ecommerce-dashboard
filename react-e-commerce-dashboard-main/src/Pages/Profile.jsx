import React from 'react'
import { useAuth } from '../context/auth'
import "./login.css"
import { useNavigate } from 'react-router-dom'
const Profile = () => {

    const [auth,setAuth]=useAuth()
    const Navigate=useNavigate()
  return (
<div className='profile'>
    <h1 className='m-5'>User Details</h1>
 
  <table>
  <tr>
        <th>Name:</th>
        <td>{auth?.user?auth.user.name:"No user Loggined"}</td>
    </tr>
         <tr>
         <th>Email</th>
         <td>{auth?.user?auth.user.email:"No user Loggined"}</td>
     </tr>
     <tr>
         <th>Phone</th>
         <td>{auth?.user?auth.user.phone:"No user Loggined"}</td>
     </tr>
    
    </table>
    <button className='back_dashboard' onClick={()=>{Navigate("/dashboard")}}>Back to Dashboard</button>
</div>
  )
}

export default Profile

// import React from 'react'
// import { useAuth } from '../context/auth'
// import "./login.css"
// const Profile = () => {

//     const [auth,setAuth]=useAuth()
//   return (
// <div className='profile'>
//   <table>
//     <tr>
//         <th>Name</th>
//         <td>{auth.user?auth.user.name:"No user Loggined"}</td>
//     </tr>
//     <tr>
//         <th>Email</th>
//         <td>{auth.user?auth.user.email:"No user Loggined"}</td>
//     </tr>
//     <tr>
//         <th>Phone</th>
//         <td>{auth.user?auth.user.phone:"No user Loggined"}</td>
//     </tr>
//     <tr>
//         <th>Name</th>
//         <td>{auth?auth.user.name:"No user Loggined"}</td>
//     </tr>
//   </table>
// </div>
//   )
// }

// export default Profile