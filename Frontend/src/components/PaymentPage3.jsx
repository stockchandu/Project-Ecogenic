import '../styles/paymentpage3.scss';
import { whiteArrow,personHead,googlePay,plusIcon,masterCard,visaCard,mnpPayment} from '../images/allImages';
import { Link } from "react-router-dom";
const PaymentPage3 = () =>{
  let getEmail = localStorage.getItem("email");
  let getName = localStorage.getItem("name");
    return (
        <>
         <div id="payment-1-parent">

                {/* nthchild-1 */}
             <div>
                 <div><Link to="/PaymentPage2"><img src={whiteArrow} alt="" /></Link></div>
                 <div>Bill Total: Rs.140</div>
             </div>

                 {/* nthchild-2 */}
             <div>
                 <div><img src={personHead} alt="" /></div>
                 <div>{getEmail}</div>
                 <div></div>
             </div>

              {/* nthchild-3 */}
             <div>Preferred payment</div>

              {/* nthchild-4 */}
             <div>
                 <div><img src={googlePay} alt="" /></div>
                 <div><Link to="/GooglePay">Google Pay</Link></div>
                 <div></div>
             </div>

                 {/* nthchild-5 */}
             <div>Credit/Debit Cards</div>

              {/* nthchild-6 */}
             <div>
                 <div><img src={plusIcon} alt="" /></div>
                 <div> <Link to="/PaymentPage4">Add New Card</Link> 
                     <div>
                         <img src={masterCard} alt="" />
                         <img src={visaCard} alt="" />
                         <img src={mnpPayment} alt="" />
                    </div>
                 </div>
             </div>

              {/* nthchild-7 */}
             <div>UPI</div>

              {/* nthchild-8 */}
             <div>
                 <div><img src={plusIcon} alt="" /></div>
                 <div>Add New UPI
                     <div>
                         <img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/mastercard.png" alt="" />
                         <img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/visa.png" alt="" />
                         <img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/mnp.png" alt="" />
                     </div>
                 </div>
             </div>

              {/* nthchild-9 */}
             <div>More payment options</div>

              {/* nthchild-10 */}
             <div></div>
         </div>
        </>
    )

}



export default PaymentPage3