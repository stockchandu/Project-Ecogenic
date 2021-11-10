import { useState } from "react"
import "./questionSeven.css"

const QuestionSeven = () => {

    const [num, setNum] = useState(0)
    const [emi, setEmi] = useState(2.84)

    const handlePlus=()=>{
        setNum(num+1)
        //setEmi((emi+0.2))
    }

    const handleMinus=()=>{
        //setEmi(emi-0.2)
        setNum(num-1)
    }

    const handleSkip=()=>{
        //setEmi(2.84)
        setNum(0)
    }

    return (
        <div>
            <img id="back-img" src={require("../images/unsplash_4NhqyQeErP8.png").default} alt="none" />
            <div id="emission">
                {emi}
            </div>
            <div id="ton">
            Tons CO2e
            </div>
            <div id="chat-1">
                <p id="chat-text">How many people leave in your home?</p>
            </div>
            <div id="rect">
            <img id="arr" src={require("../images/Group 1999.png").default} alt="none" />
                <img id="que" src={require("../images/Component 13.png").default} alt="none" />
                <div id="btn">
                    <p id="ppl">People</p>
                    <div onClick={handleMinus} id="mbtn">
                        <img id="msign" src={require("../images/Vector.png").default} alt="none" />
                    </div>
                    <div id="num">{num}</div>
                    <div id="pbtn" onClick={handlePlus}>
                       <div id="psign">+</div>
                    </div>
                </div>
                {num > 0 ? 
                <div>
                    <div style ={{backgroundColor:"#149F65"}} id="next">
                        Next
                    </div>
                    <div id="skip" onClick={handleSkip}>
                        Clear
                    </div>
                </div> 
                : 
                <div>
                    <div id="next">
                        Next
                    </div>
                    <div id="skip">
                        Skip
                    </div>
                </div>}
            </div>
        </div>
    )
}

export { QuestionSeven }