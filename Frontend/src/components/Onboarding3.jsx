import "../styles/onboarding3.css"
import { ecogenicLogo,getStartedBtn,underNature } from "../images/allImages"
const Onboarding3 = ({next})=>{
    return(
        <div>
            <img id="ecogenic3" src={underNature} alt="none"/>
            <img id="ecogen" src={ecogenicLogo} alt="none"/>
            <img id="getStarted" onClick={next} src={getStartedBtn} alt="none"/>
            <p id="p1" >Already have an account? Login</p>
            <p id="p2">Terms of service/ Privacy Policy</p>
        </div>
    )
}

export {Onboarding3} 
