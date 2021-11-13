import "./onboarding3.css"


const Onboarding3 = ({c})=>{

    

    return(
        <div>
            <img id="ecogenic3" src={require("../images/undraw_nature_m5ll 1.png").default} alt="none"/>
            <img id="ecogen" src={require("../images/Group 1981.png").default} alt="none"/>
            <img id="getStarted" src={require("../images/Component 2.png").default} alt="none"/>
            <p id="p1" onClick={c}>Already have an account? Login</p>
            <p id="p2">Terms of service/ Privacy Policy</p>
        </div>
    )
}

export {Onboarding3}
