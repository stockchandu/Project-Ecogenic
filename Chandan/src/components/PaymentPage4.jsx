import '../styles/paymentpage4.scss';


const PaymentPage4=()=>{

    return (
        <>
            <div id="parent-card-1">

            {/* child 1 */}
             <div>
             <div><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/leftarrowfinal.png" alt="" /></div>
                 <div>Add New Card</div>
             </div>

             {/* child 2 */}
             <div>
                 <div id="hash"><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/hash.png" alt="hash"  /></div>
                 <div id="input-parent">
                     <div>Card Number</div>
                     <div><input type="text" autocomplete="cc-csc" placeholder="ENTER CARD NUMBER"/></div>
                     <div><input type="text" placeholder="NAME ON THE CARD" autocomplete="cc-csc"/></div>
                     <div>
                         <input type="text" autocomplete="cc-csc" placeholder="MM/YY"/>
                         <input type="text" autocomplete="cc-csc" placeholder="CVV"/>
                     </div>
                 </div>
             </div>

             {/* child3 */}
             <div>
                 <button>PROCEED TO PAYMENT</button>
            </div>

             {/* child4 */}
             <div><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/blackvisa.png" alt="" /></div>

            </div>
        </>
    )

}

export default PaymentPage4