import "./App.css";
import axios from "axios";

function Payment() {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:5000/payment/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_85D8d8bNTWKCEA", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "ECOGENIC pvt.ltd.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "ECOGENIC pvt.ltd",
                email: "help@ecogenic.com",
                contact: "9999999999",
            },
            notes: {
                address: "ECOGENIC pvt.ltd",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div>
            <header>

                <p>Buy React now!</p>
                <button onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </header>
        </div>
    );
}

export default Payment;