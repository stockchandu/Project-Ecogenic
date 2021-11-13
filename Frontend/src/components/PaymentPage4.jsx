import '../styles/paymentpage4.scss';
import React from "react"
import { useState } from 'react'
import { hideemail } from '../utils/hideemail';
import { useHistory,Link } from "react-router-dom";
import { whiteArrow, blackCard, masterCard, visaCard } from '../images/allImages';

const PaymentPage4 = () => {
    let history = useHistory()
    const [input, setInput] = useState({
        cardnumber: "",
        cardname: "",
        mmyy: "",
        cvv: "",
    });

    const [getinput, setInputData] = useState([])

    // input style state
    const [cardNumStyle, setcardNumStyle] = useState(false);
    const [cardNameStyle, setcardNameStyle] = useState(false);
    const [cardMMYY, setcardMMYYStyle] = useState(false);
    const [cardCVVStyle, setcardCVVStyle] = useState(false);
    const [borderStyle, setBorderStyle] = useState(false);

    // show card image state
    const [master, setMaster] = useState(false);
    const [visa, setVisa] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });

    }

    const showCardData = (e) => {
        let { value } = e.target;
        if (value.startsWith("5")) {
            setMaster(true);
            setVisa(false);
        } else if (value.startsWith("4")) {
            setVisa(true)
            setMaster(false);
        } else {
            setMaster(false);
            setVisa(false);
        }

    }

    let { cardnumber, cardname, mmyy, cvv } = input;

    let hideCvv = cvv;
    let outputCvv = hideemail(hideCvv);
 
    const handleInputData = () => {

        if (cardnumber.length === 0 || cardname.length===0 || mmyy.length===0 || cvv.length===0) {
            setBorderStyle(true);
        }

        else {
            setBorderStyle(false);
            let otp = Math.floor(100000 + Math.random() * 900000);
            localStorage.setItem("otp", otp);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false)
            }, 5000)

            setTimeout(() => {
                window.location = "/Authenticate"
            }, 5000);
        }

    }

    console.log(cvv)

    const handlecardNumStyle1 = (e) => {
        setcardNumStyle(true);
        e.target.placeholder=""
    }

    const handlecardNumStyle2 = (e) => {
        setcardNumStyle(false);
        e.target.placeholder="ENTER CARD NUMBER"
    }

    const handlecardNameStyle1 = (e) => {
        setcardNameStyle(true);
        e.target.placeholder=""
    }

    const handlecardNameStyle2 = (e) => {
        setcardNameStyle(false);
        e.target.placeholder="NAME ON THE CARD"
    }

    const handlecardMMYYStyle1 = (e) => {
        setcardMMYYStyle(true);
        e.target.placeholder=""
    }

    const handlecardMMYYStyle2 = (e) => {
        setcardMMYYStyle(false);
        e.target.placeholder="MM/YY"
    }

    const handlecardCVVStyle1 = (e) => {
        setcardCVVStyle(true);
        e.target.placeholder="";
    }

    const handlecardCVVStyle2 = (e) => {
        setcardCVVStyle(false);
        e.target.placeholder="CVV"
    }

    let inputCardNumStyle;
    let inputCardNameStyle;
    let inputCardMMYYStyle;
    let inputCardCVVStyle;

    if (cardNumStyle) {
        inputCardNumStyle = {
            borderBottom: "1px solid #149F64",
        }

    }

    if (cardNameStyle) {
        inputCardNameStyle = {
            borderBottom: "1px solid #149F64",
        }
    }

    if (cardMMYY) {
        inputCardMMYYStyle = {
            borderBottom: "1px solid #149F64",
        }
    }

    if (cardCVVStyle) {
        inputCardCVVStyle = {
            borderBottom: "1px solid #149F64",
        }
    }

    return (
        <>
            <div id="parent-card-1">

                {/* child 1 */}
                <div>
                    <div><Link to="/PaymentPage3"><img src={whiteArrow} alt="" /></Link></div>
                    <div>Add New Card</div>
                </div>

                {/* child 2 */}
                <div>
                    <div id="input-parent">

                        <div>{cardNumStyle ? "Card Number" : ""}</div>
                        <div>
                            <input type="text" name="cardnumber"  maxLength="16" style={inputCardNumStyle} style={borderStyle ? { borderBottom: "1px solid red" } : { borderBottom: "1px solid grey" }} autocomplete="cc-csc" placeholder="ENTER CARD NUMBER" onFocus={handlecardNumStyle1} onBlur={handlecardNumStyle2} onInput={showCardData} onChange={handleChange} />
                            {master ? React.createElement("img", { className: "master-card", src: masterCard }) : ""}
                            {visa ? React.createElement("img", { className: "master-card", src: visaCard }) : ""}
                        </div>
                        <div>{cardNameStyle ? "Name on the card" : ""}</div>
                        <div><input type="text" name="cardname" style={inputCardNameStyle} style={borderStyle ? { borderBottom: "1px solid red" } : { borderBottom: "1px solid grey" }} placeholder="NAME ON THE CARD" autocomplete="cc-csc" onFocus={handlecardNameStyle1} onBlur={handlecardNameStyle2} onChange={handleChange} /></div>
                        <div id="cvv-mmyy">
                            <div>
                                <div>{cardMMYY ? "MM/YY" : ""}</div>
                                <div><input type="text" style={inputCardMMYYStyle} style={borderStyle ? { borderBottom: "1px solid red" } : { borderBottom: "1px solid grey" }} name="mmyy" autocomplete="cc-csc" placeholder="MM/YY" maxLength="5" onFocus={handlecardMMYYStyle1} onBlur={handlecardMMYYStyle2} onChange={handleChange} /></div>
                            </div>

                            <div>
                                <div>{cardCVVStyle ? "CVV" : ""}</div>
                                <div><input type="password" style={inputCardCVVStyle} style={borderStyle ? { borderBottom: "1px solid red" } : { borderBottom: "1px solid grey" }} name="cvv" autocomplete="cc-csc" placeholder="CVV" maxLength="3" onFocus={handlecardCVVStyle1} onBlur={handlecardCVVStyle2} onChange={handleChange}  /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* child3 */}
                <div>
                    <button onClick={handleInputData}>{isloading ? "Verifying..." : "PROCEED TO PAYMENT"}</button>
                </div>

                {/* child4 */}
                <div><img src={blackCard} alt="" /></div>

            </div>
        </>
    )

}

export default PaymentPage4