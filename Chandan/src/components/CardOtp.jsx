import '../styles/cardotp.scss'

import {useState} from "react"
import {useHistory } from "react-router-dom";

const CardOtp = () =>{

    let history = useHistory()

    let otp = localStorage.getItem("otp");
    console.log(otp)
    
    const [input,setInput]=useState("");
    const [error,setError]=useState(false);
    const [validate,setValidate]=useState(false);

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const handleOTP = () =>{
        if(otp===input){
            setValidate(true);

            setTimeout(()=>{
                history.push("/SuccessPage");
            },5000);

        }else{
            setError(true);
            setValidate(false);
        }
    }


    return(
        <>

        <div id="verified-visa"><img src="https://logowik.com/content/uploads/images/verified-by-visa6450.jpg" alt="" /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png" alt="" /></div>

      <div id="main-otp-parent">

          <div>
             we successfully verified your details , please enter onetime otp
             <br />
             that sent to your registered number +91-8847*****06
          </div>
        <div id="input-otp">
            <label htmlFor="" style={{color:"#2E53A0"}}>OTP:</label>
            <input type="text" onChange={handleChange} maxLength="6"/>

            <div style={{color:"#2E53A0"},{textDecoration:"underline"}}>{error?"Please Enter OTP":"Resend OTP"}</div>
        </div>

        <div id="btn-submit">
            <button onClick={handleOTP}>Submit</button>
            <button>Cancel</button>
        </div>

            <div>{validate?"OTP Validating...":""}</div>
        </div>
        </>
    )

}

export default CardOtp