import { failureIcon,blackCross,blueArrow } from "../images/allImages";
const FailurePage = () => {
    return (
        <>
        <div><img src={blackCross} alt="" /></div>
         <div>
            <div><img src={failureIcon} alt="" /></div>
            <div>Payment successfully completed</div>
            <div><img src={blueArrow} alt="" />Go back to home</div>
        </div>
        </>
    )
}

export default FailurePage