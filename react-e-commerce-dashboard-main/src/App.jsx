import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Loginpage from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Profile from './Pages/Profile.jsx';
import Todo from './sidebar_pages/Todo.jsx'
import Home from './sidebar_pages/Home.jsx';
import Writefeedback from './sidebar_pages/Writefeedback.jsx';

const App = () => {

  
  return (
    <>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Feedback' element={<Writefeedback/>}/>
    </Routes>
    </>
  )
};

export default App;
