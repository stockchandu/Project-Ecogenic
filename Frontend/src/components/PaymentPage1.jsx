import '../styles/paymentpage1.scss';
import { Link } from "react-router-dom";
import { greenArrow } from '../images/allImages';

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
                       <Link to="/PaymentPage2"><button>Activate Plan <img src={greenArrow} alt="arrow" /></button></Link>
                        <p>You can change or cancel your subscription anytime</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage1