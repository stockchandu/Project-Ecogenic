import '../styles/signupflow1.css'
import fb from '../assets/images/fb.png'
import google from '../assets/images/google.png'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

import {
    Link
} from "react-router-dom";

function SignupFlow1() {
    let history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        tc:"",
    })

    const [border1,setBorder1]=useState(false)
    const [border2,setBorder2]=useState(false)
    const [isloading, setIsLoading] = useState(false)

    const checkData = (e) => {
        e.preventDefault()
        if (data.name === "") {
            alert("add name")
            setIsLoading(false)
        }
        else if (data.email === "") {
            alert("add email")
            setIsLoading(false)
        }
        else {
         
            axios.post("http://localhost:2325/signup",{
                    name:data.name,
                    email:data.email,
                    tc:data.tc,
                })

            
            setTimeout(() => {
                history.push("/SignupFlow2")
            }, 5000)
            setIsLoading(true)
        }
    }

    setTimeout(() => {
        setIsLoading(false)
    }, 8000)

    const handleChange = (e) => {

        let { name, value,type,checked } = e.target

        setData({
             ...data, 
            [name]: type==="checkbox"?checked:value
         })

    }

    
    const changeBorder1=()=>{
        setBorder1(true)
    }
    const changeBorder2=()=>{
        setBorder2(true)
    }
    return (
        <>
            <div id="skip-arrow">
                <div><img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" /></div>
                <div><Link to="/">SKIP</Link></div>
            </div>

            <div className="text-center">Sign Up</div>

                <form onSubmit={checkData}>
                <div id="signup-form">
                    <div style={border1?{border:"2px solid #3277D8"}:{border:"1px solid grey"}}><input type="text" name="name" id="" placeholder="NAME" onChange={handleChange}  onFocus={()=>{changeBorder1()}}/></div>
                    <div style={border2?{border:"2px solid #3277D8"}:{border:"1px solid grey"}}><input type="text" name="email" id="" placeholder="EMAIL" onChange={handleChange} onFocus={()=>{changeBorder2()}}/></div>
                </div>

                <div className="checkbox">
                    <div><input type="checkbox" name="tc" id="" onChange={handleChange}  /></div>
                    <div>I agree to the <span>Terms of service</span> and  <span>Privacy Policy</span></div>
                </div>



                <button className="btn-register" type="submit" style={data.tc?{backgroundColor:"green",color:"white"}:{backgroundColor:"white"}}>{isloading ? "Please Wait..." : "REGISTER"}</button>
            </form>

            <div className="hr-line">
                <div></div>
                <div>OR</div>
                <div></div>
            </div>


            <div id="signup-third">
                <div><span><img src={fb} alt="facebook logo" /></span>SIGN UP WITH FACEBOOK</div>
                <div><span><img src={google} alt="google logo" /></span>SIGN UP WITH GOOGLE</div>
            </div>


            <div id="have-account">Already have an account? <span>Login</span></div>
        </>
    )
}

export default SignupFlow1