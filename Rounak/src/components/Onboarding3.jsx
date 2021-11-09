import "./onboarding3.css"


const Onboarding3 = ()=>{
    return(
        <div>
            <img id="ecogen" src={require("../images/Group 1981.png").default} alt="none"/>
            <img id="getStarted" src={require("../images/Component 2.png").default} alt="none"/>
            <p id="p1">Already have an account? Login</p>
            <p id="p2">Terms of service/ Privacy Policy</p>
        </div>
    )
}

export {Onboarding3}
