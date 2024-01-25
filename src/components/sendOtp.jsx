import { useNavigate } from "react-router-dom";
export default function SendOtp(){
    const navigate = useNavigate();
    return <div>
        <div>login via otp</div>
        <input type="text" placeholder="enter phone number"/>
        <button onClick={()=>{
            navigate('/login')
        }}>
            send otp
        </button>
    </div>
}