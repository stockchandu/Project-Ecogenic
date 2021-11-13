import '../styles/signupflow3.scss'
import axios from 'axios'
import Timer from '../utils/Timer';
import { useState, useEffect } from 'react'
import { hideemail } from '../utils/hideemail';
import { Link, useHistory } from "react-router-dom";

function SignupFlow3() {
  let history = useHistory();
  const [otpdata, setOtp] = useState();
  const [input, setInput] = useState([]);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  document.title = "Ecogenic - Signup";

  let getEmail = localStorage.getItem("email");
  let getName = localStorage.getItem("name");

  useEffect(() => {
    getOtp();
  }, [])

  async function getOtp() {
    let data = await axios.get("http://localhost:2325/otp");
    setOtp(data.data);
  }
// 
  let checkOtp;
  if (otpdata === undefined) {
    return 0
  } else {
    let { otp } = otpdata;
    checkOtp = (e) => {
      e.preventDefault();
      setIsLoading(true);
      let newotp = "";
      input.forEach((ele) => {
        newotp += ele
      })
      newotp = Number(newotp);
      otp.forEach(({ _id, otp }) => {
        let dbotp = Number(otp);
        if (newotp === dbotp) {
          setTimeout(() => {
            history.push("/TopicInterestParent");
          }, 7000);
        } else {
          setTimeout(() => {
            setError(true);
          }, 8000)
          setInput([]);
        }
      })
      setTimeout(() => {
        setIsLoading(false);
      }, 6000)
    }
  }

  const handleChange = (e) => {
    let { value } = e.target;
    setInput([...input, value])
  }

  let email = getEmail;
  let output = hideemail(email);

  const resendOtp = () => {
    setResendLoading(true)
    axios.patch("http://localhost:2325/resendotp", {
      email: email,
      name: getName
    }).then(getOtp);

    setTimeout(() => {
      setResendLoading(false)
    }, 5000)
  }

  return (
    <>
      <div>
        <Link to="/SignupFlow2"><img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="arrow" id="otp-sec-0" /></Link>
      </div>

      <div id="otp-sec-1">
        <div>Login with OTP</div>
        <div>To confirm your email address, please enter the OTP we sent to {output}</div>
      </div>

      <div id="invalid-otp">{error ? "Please enter valid otp" : ""}</div>

      <form onSubmit={checkOtp}>
        <div id="otp-input-box">
          <div>
            <input type="text" onChange={handleChange} maxLength="1" />
            <input type="text" onChange={handleChange} maxLength="1" />
            <input type="text" onChange={handleChange} maxLength="1" />
            <input type="text" onChange={handleChange} maxLength="1" />
          </div>
        </div>

        <Timer />

        <div id="btn-login">
          <div><button type="submit">{isloading ? "Verifying OTP..." : "LOGIN"}</button></div> </div>
      </form>

      <div id="btn-resend">
        <div>
          <button onClick={resendOtp}>{resendLoading ? "Resending..." : "DIDN'T RECEIVE THE CODE? RESEND NOW"}</button>
        </div>
        <div>Having trouble logging in? <span>Get help</span> </div>
      </div>
    </>
  )
}

export default SignupFlow3

