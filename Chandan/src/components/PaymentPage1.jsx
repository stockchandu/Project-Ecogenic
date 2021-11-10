import '../styles/paymentpage1.scss';
import { useHistory,Link } from "react-router-dom";

import { greenArrow } from '../assets/images/allImages';


const PaymentPage1 = () => {
    return (
        <>
            <div id="payment-parent-1">
                <div>
                    <h1>Thank you
                        <h3>for going carbon neutral!</h3>
                    </h1>
                </div>

                <div>

                    <div>Your offset plan:</div>

                    <div>
                        <div><h1>Rs. 140 / mo</h1>
                            <div>Offsets your full carbon footprint</div>
                        </div>
                    </div>

                    <div>
                        <button>Activate Plan <img src={greenArrow} alt="arrow" /></button>
                        <p>You can change or cancel your subscription anytime</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage1