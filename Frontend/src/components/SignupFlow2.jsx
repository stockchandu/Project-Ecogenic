import '../styles/signupflow2.scss'
import { hideemail }from '../utils/hideemail';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

const SignupFlow2 = () => {
    const [timer,setTimer]=useState(59);
    const [showError,setShowError]=useState(false);

    let getEmail = localStorage.getItem("email");
    let email = getEmail;
    let output = hideemail(email);

    useEffect(()=>{
        let otpTime= setInterval(()=>{
            setTimer((old)=>{
                if(old===0){
                clearInterval(otpTime);
                setShowError(true);
                return 0;
            }
        return old-1;
        })
    },1000);
},[])
  
return (
        <>
            <div >
                <Link to="/SignupFlow1"> <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" id="arrow" /></Link>
            </div>

            <p id="text-confirm">To confirm your email address, please tap the button in the email we sent to {output}</p>

            <div id="enter-otp-manually">{showError?"Please enter OTP Manually":""}</div>

            <div id="btn-email">
                 <button>OPEN EMAIL APP</button>
            </div>

            <div id="timer-manually">
                <div>
                    0 : {timer}
                </div>
                <div> 
                    <Link to="/SignupFlow3">Manually enter OTP</Link>
                </div>
            </div>

            <div id="trouble">Having trouble logging in? <span>Get help</span> </div>
        </>
    )
}

export default SignupFlow2;