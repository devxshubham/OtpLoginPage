import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/sendotp' element={<SendOtp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function SendOtp(){
  const navigate = useNavigate();
  return <div className='sendotp'>
      <div>Login via OTP</div>
      <input type="text" placeholder="enter phone number"/>
      <button onClick={()=>{
          navigate('/login')
      }}>
          send otp
      </button>
  </div>
}
function Login(){
  const navigate = useNavigate();
  const [count, setCount] = useState(3);
  const vaule = false;
  useEffect(()=>{
    
  },[count])
  return <div className='sendotp'>
    <div className='inputs'>
      <input className='digitInput' type="text" autoFocus={count == 0} onChange={()=>{
        setCount(count+1);
      }}/>
      <input className='digitInput' type="text" autoFocus={count == 1} onChange={()=>{
        setCount(count+1);
      }}/>
      <input className='digitInput' type="text" autoFocus={count == 2} onChange={()=>{
        setCount(count+1);
      }}/>
      <input className='digitInput' type="text" autoFocus={count == 3} onChange={()=>{
        setCount(count+1);
        
      }}/>
    </div>

    <button>verify</button>
    <button onClick={()=>{
      navigate('/sendotp')
    }}>change number</button>
  </div>
}

export default App
