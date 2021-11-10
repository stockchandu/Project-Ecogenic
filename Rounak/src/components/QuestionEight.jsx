
import "./questionEight.css"

const QuestionEight = ()=>{
    return(
        <div>
            <img id="back-img" src={require("../images/unsplash_4NhqyQeErP8.png").default} alt="none" />
            
            <div id="qu8">last question, do you have renewable electricity at home?</div>
            
            <div id="rec">
            <img id="arr" src={require("../images/Group 1999.png").default} alt="none" />
            <img id="qno" src={require("../images/Component 12.png").default} alt="none" />
            
            </div>
        </div>
    )
}

export {QuestionEight}