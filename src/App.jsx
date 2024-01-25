import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Login = import('./components/login')
const SendOtp = import('./components/sendOtp')

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path='/sendotp' element={<SendOtp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
function AppBar(){
  const navigate = useNavigate();
  return <button onClick={()=>{
    navigate('/sendotp')
  }}>proceed for verification</button>
}


export default App
