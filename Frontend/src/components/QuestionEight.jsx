import "./questionEight.css"
import { windFan,backArrow ,fullBar} from "../images/allImages"
const QuestionEight = ()=>{
    return(
        <div>
            <img id="back-img" src={windFan} alt="none" />
            <div id="qu8">last question, do you have renewable electricity at home?</div>
            <div id="rec">
            <img id="arr" src={backArrow} alt="none" />
            <img id="qno" src={fullBar} alt="none" />
            </div>
        </div>
    )
}

export {QuestionEight}