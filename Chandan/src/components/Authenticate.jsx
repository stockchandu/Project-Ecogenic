
import { Link, useHistory } from "react-router-dom";
const Authenticate = () =>{
    let history=useHistory();

    const imgStyle={
        width:"200px",
        marginLeft:"20%"
    }
    window.onload = function () {

        window.location="/CardOtp"
    }

    return (
        <>
    <h3>authenticating...</h3>
    <img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/gifspinner.gif" alt="" style={imgStyle}/>
    </>
    )
}

export default Authenticate