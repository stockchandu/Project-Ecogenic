import { useState, useEffect } from 'react';
const Timer = () => {

    const validCounter = {
        "textAlign": "center",
        "marginTop": "5%",
        "fontWeight": "700",
    }

    const [minutes, setMinutes] = useState(9);
    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        let otpTimer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(otpTimer);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => {
            clearInterval(otpTimer);
        };
    });

    return (
        <div style={validCounter}>
            {minutes === 0 && seconds === 0
                ? "Otp expired , please resend OTP"
                : <p> VALID FOR {minutes} : {seconds} MINS </p>
            }
        </div>
    )
}

export default Timer;