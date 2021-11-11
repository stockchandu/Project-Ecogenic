import '../styles/paymentpage4.scss';

import React from "react"

import { whiteArrow, greenHash, blackCard, masterCard, visaCard } from '../images/allImages';

import { useState } from 'react'

import { hideemail } from '../utils/hideemail';
import {useHistory } from "react-router-dom";


const PaymentPage4 = () => {
    let history = useHistory()

    const [input, setInput] = useState({
        cardnumber: "",
        cardname: "",
        mmyy: "",
        cvv: "",
    });

    const [getinput,setInputData] = useState([])

    // input style state
    const [cardNumStyle, setcardNumStyle] = useState(false);
    const [cardNameStyle, setcardNameStyle] = useState(false);
    const [cardMMYY, setcardMMYYStyle] = useState(false);
    const [cardCVVStyle, setcardCVVStyle] = useState(false);

    // show card image state
    const [master, setMaster] = useState(false);
    const [visa, setVisa] = useState(false);
    const [isloading,setIsLoading] = useState(false)

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
    const handleInputData = () =>{
        if(cardnumber.length===0){
            alert("wrong")
        }

        else{
            let otp = Math.floor(100000 + Math.random() * 900000);
            localStorage.setItem("otp",otp);
            setIsLoading(true);
            setTimeout(()=>{
                setIsLoading(false)
            },5000)

            setTimeout(()=>{
               window.location="/Authenticate"
            },5000);
        }
    }

  
    const handlecardNumStyle1 = () => {
        setcardNumStyle(true);
    }

    const handlecardNumStyle2 = () => {
        setcardNumStyle(false);
    }

    const handlecardNameStyle1 = () => {
        setcardNameStyle(true);
    }

    const handlecardNameStyle2 = () => {
        setcardNameStyle(false);
    }

    const handlecardMMYYStyle1 = () => {
        setcardMMYYStyle(true);
    }

    const handlecardMMYYStyle2 = () => {
        setcardMMYYStyle(false);
    }

    const handlecardCVVStyle1 = () => {
        setcardCVVStyle(true);
    }

    const handlecardCVVStyle2 = () => {
        setcardCVVStyle(false);
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
                    <div><img src={whiteArrow} alt="" /></div>
                    <div>Add New Card</div>
                </div>

                {/* child 2 */}
                <div>
                    <div id="input-parent">

                        <div>{cardNumStyle ? "Card Number" : ""}</div>
                        <div>
                            <input type="text" name="cardnumber" maxLength="16" style={inputCardNumStyle} autocomplete="cc-csc" placeholder="ENTER CARD NUMBER" onFocus={handlecardNumStyle1} onBlur={handlecardNumStyle2} onInput={showCardData} onChange={handleChange} />
                            {master ? React.createElement("img", { className: "master-card", src: masterCard }) : ""}
                            {visa ? React.createElement("img", { className: "master-card", src: visaCard }) : ""}
                        </div>
                        <div>{cardNameStyle ? "Name on the card" : ""}</div>
                        <div><input type="text" name="cardname" style={inputCardNameStyle} placeholder="NAME ON THE CARD" autocomplete="cc-csc" onFocus={handlecardNameStyle1} onBlur={handlecardNameStyle2} onChange={handleChange}/></div>
                        <div id="cvv-mmyy">
                            <div>
                                <div>{cardMMYY ? "MM/YY" : ""}</div>
                                <div><input type="text" style={inputCardMMYYStyle} name="mmyy" autocomplete="cc-csc" placeholder="MM/YY" maxLength="4" onFocus={handlecardMMYYStyle1} onBlur={handlecardMMYYStyle2} onChange={handleChange}/></div>
                            </div>

                            <div>
                                <div>{cardCVVStyle ? "CVV" : ""}</div>
                                <div><input type="text" style={inputCardCVVStyle} name="cvv" autocomplete="cc-csc" placeholder="CVV" maxLength="3" onFocus={handlecardCVVStyle1} onBlur={handlecardCVVStyle2} onChange={handleChange}/></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* child3 */}
                <div>
                    <button onClick={handleInputData}>{isloading?"Verifying...":"PROCEED TO PAYMENT"}</button>
                </div>

                {/* child4 */}
                <div><img src={blackCard} alt="" /></div>

            </div>
        </>
    )

}

export default PaymentPage4