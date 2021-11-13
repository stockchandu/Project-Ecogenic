import { gifSpinner } from '../images/allImages';
const Authenticate = () => {
       const imgStyle = {
        width: "200px",
        marginLeft: "20%"
    }

    window.onload = function () {
        setTimeout(()=>{
            window.location = "/CardOtp"
        },5000)
    }

    return (
        <>
            <h3>authenticating...</h3>
            <img src={gifSpinner} alt="" style={imgStyle} />
        </>
    )
}

export default Authenticate