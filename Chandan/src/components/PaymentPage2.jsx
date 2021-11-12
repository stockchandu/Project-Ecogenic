import '../styles/paymentpage2.scss';
import { Link } from "react-router-dom";
const PaymentPage1 = () =>{
    return (
        <>
            <div id="payment-parent-2">
                <div>
                   <h1>Thank you
                       <h3>for going carbon neutral!</h3>
                   </h1>
                </div>

                <div>
                    <div>Summary</div>
                   <div id="annual-offset">
                       <div id="offset">
                           <div>Annual offset</div>
                           <div>0.89 tons</div>
                       </div>
                       <div id="month-charge">
                           <div>Monthly charge</div>
                           <div>Rs. 140</div>
                       </div>
                   </div>

                   <div id="make-payment"><Link to="/PaymentPage3"><button>Make Payment</button></Link></div>
                </div>
                
            </div>
        </>
    )
}

export default PaymentPage1