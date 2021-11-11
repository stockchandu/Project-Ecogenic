import '../styles/successpage.scss'
import {blackCross,blueArrow,successGif } from '../images/allImages';

const SucessPage = () => {
    return (
        <>
        <div className="cross-image"><img src={blackCross} alt="" /></div>
        <div className="status-image">
            <div><img src={successGif} alt="" /></div>
            <div>Payment successfully completed</div>
            <div><img src={blueArrow} alt="" />Go back to home</div>
        </div>
        </>
    )
}

export default SucessPage