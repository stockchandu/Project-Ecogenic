import '../styles/paymentpage4.scss';

import React from "react"

import { whiteArrow,greenHash,blackCard,masterCard } from '../assets/images/allImages';

import {useState} from 'react'

import { hideemail } from '../utils/hideemail';

const PaymentPage4=()=>{

    const [border,setBorder] = useState(false);
    const [input,setInput] = useState('');
    const [master,setMaster]=useState(false);

    const handleChange = (e) =>{
        setInput(e.target.value);
        
    }


    const showCardData = (e) =>{

        let {value} = e.target;

        if(value.startsWith("5")){
            setMaster(true);
        }
        else if(value.startsWith("6")){
            setMaster(false);
        }

    }


    const handleBorder = () =>{
        setBorder(true);
    }

    const handleBorderGrey = () =>{
        setBorder(false);
    }

    let borderStyle;

    if(border){
        borderStyle={
            borderBottom:"1px solid #149F64"
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
                 <div id="hash"><img src={greenHash} alt="hash"  /></div>
                 <div id="input-parent">
                     <div>Card Number</div>
                     <div><input type="text"   maxLength="16" style={borderStyle} autocomplete="cc-csc" placeholder="ENTER CARD NUMBER" onFocus={handleBorder} onBlur={handleBorderGrey} onInput={showCardData}/>{master?React.createElement("img", {className: "loungeImage", src: masterCard}):""}</div>
                     <div><input type="text" placeholder="NAME ON THE CARD" autocomplete="cc-csc"/></div>
                     <div>
                         <input type="text" autocomplete="cc-csc" placeholder="MM/YY"  maxLength="4"/>
                         <input type="text" autocomplete="cc-csc" placeholder="CVV" maxLength="3" />
                     </div>
                 </div>
             </div>

             {/* child3 */}
             <div>
                 <button>PROCEED TO PAYMENT</button>
            </div>

             {/* child4 */}
             <div><img src={blackCard} alt="" /></div>

            </div>
        </>
    )

}

export default PaymentPage4