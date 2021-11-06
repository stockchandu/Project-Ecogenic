import '../styles/signupflow3.css'
import {
  Link,
  useHistory
} from "react-router-dom";

import axios from 'axios'
import { useState, useEffect,useRef } from 'react'

function SignupFlow3() {
  let history = useHistory();
  const [otpdata, setOtp] = useState();
  const [input, setInput] = useState([]);
  const [error, setError] = useState(false);

  let data = useRef("")

  useEffect(() => {
    async function getOtp() {
      let data = await axios.get("http://localhost:2325/otp");
      setOtp(data.data);
    }
    getOtp()

  }, [])

  let checkOtp;
  if (otpdata === undefined) {
    return 0
  } else {
    let { otp } = otpdata;
    let dbotp = (+otp[0].otp);
    // console.log(dbotp)

    checkOtp = (e) => {
      e.preventDefault();
         
      if(input.length>4){
        let newotp = input.length/2
 for(let i=newotp;i>=input.length-4;i++){
        console.log(input[i])
      }
      }

      // for(let i=newotp;i>=input.length-4;i++){
      //   console.log(input[i])
      // }

      newotp = Number(newotp)
      console.log(newotp)

      if (newotp === dbotp) {
        history.push("/")
      } else {
        setError(true)
      }
      setInput("")
console.log(newotp)
    }

  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput([
      ...input,
      value
    ])

  }


  return (
    <>
      <div>
        <Link to="/SignupFlow2"><img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="arrow" id="otp-sec-0" /></Link>
      </div>

      <div id="otp-sec-1">
        <div>Login with OTP</div>
        <div>To confirm your email address, please enter
          the OTP we sent to m*****e@gmail.com</div>
      </div>

      <div>{error ? "Please enter valid otp" : ""}</div>

      <form onSubmit={checkOtp}>
        <div id="otp-input-box">
          <div>
            <input type="text"  onChange={handleChange} maxLength="1" />
            <input type="text"  onChange={handleChange} maxLength="1" />
            <input type="text"  onChange={handleChange} maxLength="1" />
            <input type="text"  onChange={handleChange} maxLength="1" />
          </div>
        </div>

        <div id="valid-counter">VALID FOR 10 MINS</div>

        <div id="btn-login">
          <div>
            <button type="submit">LOGIN</button>
            <button>DIDN'T RECEIVE THE CODE? RESEND NOW</button>
          </div>
          <div>Having trouble logging in? <span>Get help</span> </div>
        </div>
      </form>
    </>
  )
}

export default SignupFlow3