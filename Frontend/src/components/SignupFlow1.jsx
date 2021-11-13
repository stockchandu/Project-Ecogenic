import '../styles/signupflow1.scss';
import { googleLogo, fbLogo } from '../images/allImages'
import { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase'

function SignupFlow1() {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    let history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        tc: "",
    });

    const [border1, setBorder1] = useState(false);
    const [border2, setBorder2] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [inputError, setinputError] = useState(false);

    let { name, email, tc } = data;

    const checkData = (e) => {
        e.preventDefault();

        if (name === "") {
            setinputError(true);
            setIsLoading(false);

        } else if (email === "") {
            setinputError(true)
            setIsLoading(false);

        } else {

            setinputError(false);
            axios.post("http://localhost:2325/signup", {
                name: name,
                email: email,
                tc: tc,
            })

            setTimeout(() => {
                history.push("/SignupFlow2")
            }, 6000);

            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
            }, 5000);

            localStorage.setItem("email", email);
            localStorage.setItem("name", name);
        }
    };


    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                let { email, displayName, photoURL } = user
                axios.post("http://localhost:2325/signup", {
                    name: displayName,
                    email: email,
                    tc: tc,
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }


    const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                let { email, displayName, photoURL } = user
                axios.post("http://localhost:2325/signup", {
                    name: displayName,
                    email: email,
                    tc: tc,
                })

            })
            .catch((error) => {
                console.log(error)
            });

    }


    const handleChange = (e) => {
        let { name, value, type, checked } = e.target
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const changeBorder1 = () => {
        setBorder1(true);
    };

    const changeBorder2 = () => {
        setBorder2(true);
    };

    const changeBorderToOriginal1 = () => {
        setBorder1(false);
    }

    const changeBorderToOriginal2 = () => {
        setBorder2(false);
    }

    return (
        <>
            <div id="skip-arrow">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" />
                </div>

                <div>
                    <Link to="/">SKIP</Link>
                </div>
            </div>

            <div className="text-center">Sign Up</div>

            <form onSubmit={checkData}>
                <div id="signup-form">
                    <div style={border1 ? { border: "1px solid #3277D8" } : { border: "1px solid grey" }}  >
                        <input type="text" name="name" id="" placeholder={inputError ? "Enter your Name" : "NAME"} onChange={handleChange} onFocus={changeBorder1} onBlur={changeBorderToOriginal1} />
                    </div>
                    <div style={border2 ? { border: "1px solid #3277D8" } : { border: "1px solid grey" }}>
                        <input type="text" name="email" id="" placeholder={inputError ? "Enter your Email" : "EMAIL"} onChange={handleChange} onFocus={changeBorder2} onBlur={changeBorderToOriginal2} />
                    </div>
                </div>

                <div className="checkbox">
                    <div>
                        <input type="checkbox" name="tc" id="" onChange={handleChange} />
                    </div>

                    <div>I agree to the <span>Terms of service</span> and  <span>Privacy Policy</span></div>
                </div>

                <button className="btn-register" type="submit" style={{ backgroundColor: "#149F64", color: "white" }}>{isloading ? "Please Wait..." : "REGISTER"}</button>
            </form>

            <div className="hr-line">
                <div></div>
                <div>OR</div>
                <div></div>
            </div>


            <div id="signup-third">
                <div onClick={facebookLogin}><span><img src={fbLogo} alt="facebook logo" /></span>SIGN UP WITH FACEBOOK</div>
                <div onClick={googleLogin}><span><img src={googleLogo} alt="google logo" /></span>SIGN UP WITH GOOGLE</div>
            </div>

            <div id="have-account">Already have an account? <span>Login</span></div>
        </>
    )
}

export default SignupFlow1