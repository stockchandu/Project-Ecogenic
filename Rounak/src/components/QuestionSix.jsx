
import "./questionSix.css"

const QuestionSix = ()=>{
    return(
        <div>
            <img id="back-img" src={require("../images/unsplash_WiE01mC9AtY.png").default} alt="none" />
            <img id="arr" src={require("../images/Group 1999.png").default} alt="none" />
            
            <div id="qu6">How big is your home?</div>
            
            <div id="rec">
            <img id="arr" src={require("../images/Group 1999.png").default} alt="none" />
            <img id="qno" src={require("../images/Component 12 (1).png").default} alt="none" />
            </div>
        </div>
    )
}

export {QuestionSix}