import '../styles/signupflow2.css'
import {
    Link
} from "react-router-dom";
// import axios from 'axios'
// import { useState,useRef,useEffect } from 'react'
const SignupFlow2 = () => {

    // const [time,setTimer]=useState(59)
 


return (
        <>
            <div >
                <Link to="/SignupFlow1"> <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" id="arrow" /></Link>
            </div>


            <p id="text-confirm">To confirm your email address, please tap the button in the email we sent to
                m*****e@gmail.com</p>

            <div id="btn-email"> <button>OPEN EMAIL APP</button></div>

            <div id="timer-manually">
                <div>5</div>
                <div> <Link to="/SignupFlow3">Manually enter OTP</Link></div>
            </div>

            <div id="trouble">Having trouble logging in? <span>Get help</span> </div>
        </>
    )
}

export default SignupFlow2