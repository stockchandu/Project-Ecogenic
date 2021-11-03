import '../styles/skip.css'
import fb from '../assets/images/fb.png'
import google from '../assets/images/google.png'
import Signup3 from '../components/Signup3'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import axios from 'axios'

import {

    Link
} from "react-router-dom";

function Signup1() {
    let history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: ""
    })

    const [otpvalue,setOtp]=useState()

   

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
                    email:data.email
                })

            
            setTimeout(() => {
                history.push("/signup3")
            }, 5000)
            setIsLoading(true)
        }
    }

    setTimeout(() => {
        setIsLoading(false)
    }, 8000)

    const handleChange = (e) => {

        let { name, value } = e.target

        setData({ ...data, [name]: value })

    }
    return (
        <>
            <div id="skip-arrow">
                <div><img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" /></div>
                <div><Link to="/signup3">SKIP</Link></div>
            </div>

            <div className="text-center">Sign Up</div>

            <form onSubmit={checkData}>
                <div id="signup-form">
                    <div><input type="text" name="name" id="" placeholder="NAME" onChange={handleChange} style={data.name.length<5?{border:"1px solid red"}:{border:"2px solid grey"}}/></div>
                    <div><input type="text" name="email" id="" placeholder="EMAIL" onChange={handleChange} /></div>
                </div>



                <div className="checkbox">
                    <div><input type="checkbox" name="" id="" /></div>
                    <div>I agree to the <span>Terms of service</span> and  <span>Privacy Policy</span></div>
                </div>



                <button className="btn-register" type="submit">{isloading ? "Please Wait..." : "REGISTER"}</button>
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

export default Signup1