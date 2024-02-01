import { useRef, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


import './App.css'

function App() {
  const number = useRef(0);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/sendotp' element={<SendOtp number={number}/>} />
          <Route path='/login' element={<Login number={number}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function SendOtp({number}){
  function handleChange(e){
    number.current = e.target.value ;
  }

  const navigate = useNavigate();
  return <div className='sendotp'>
      <div>Login via OTP</div>
      <input type="text" placeholder="enter phone number" minLength={10} onChange={(e)=> handleChange(e)}/>
      <button onClick={()=>{
          navigate('/login')
      }}>
          send otp
      </button>
  </div>
}
function Login( {number} ){
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  function handleChange(e){
    setValues([...values, e.target.value]);
  }
  function handleKey(e){
    console.log(e.keyCode)
  
  }

  if(values.length == 1) inputRef2.current.focus()
  else if(values.length == 2) inputRef3.current.focus()
  else if(values.length == 3) inputRef4.current.focus()

  return <div className='sendotp'>
    <h6>Enter Otp</h6>
    <div>
      <p>otp sent to {number.current}</p>
      <button id='editButton' onClick={()=>{
      navigate('/sendotp')
    }}> &#9998;edit </button>
    </div>
    
    <div className='inputs'>
      <input className='digitInput' autoFocus _onKeyPress_={(e)=>handleKey(e)} maxLength={1} value={values[0]} onChange={(e)=>{
        handleChange(e);
      }} type='text'/>
      <input className='digitInput' ref={inputRef2}  maxLength={1} value={values[1]} onChange={(e)=>{
        handleChange(e);
      }} type='text'/>
      <input className='digitInput' ref={inputRef3}  maxLength={1} value={values[2]} onChange={(e)=>{
        handleChange(e);
      }} type='text'/>
      <input className='digitInput' ref={inputRef4}  maxLength={1} value={values[3]} onChange={(e)=>{
        handleChange(e);
      }} type='text'/>
      
    </div>

    <button>verify</button>
  </div>
}

export default App
