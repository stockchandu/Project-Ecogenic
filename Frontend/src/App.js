import SignupFlow1 from './components/SignupFlow1';
import SignupFlow2 from './components/SignupFlow2';
import SignupFlow3 from './components/SignupFlow3';
import PaymentPage1 from './components/PaymentPage1';
import PaymentPage2 from './components/PaymentPage2';
import PaymentPage3 from './components/PaymentPage3';
import PaymentPage4 from './components/PaymentPage4';
import SuccessPage from './components/SuccessPage';
import FailurePage from './components/FailurePage';
import Authenticate from './components/Authenticate';
import OnboardingParent from './components/OnboardingParent';
import CardOtp from './components/CardOtp';
import SplashMain from './components/SplashMain';
import TopicInterestParent from './components/TopicInterestParent';
import CarbonFootCalculator2 from './components/CarbonFootCalculator2';
import CountrySelect from './components/CountrySelect';
import Location from './components/Location';
import QuestionsMain from './components/Questions/QuestionsMain';
import StrategySlideParent from './components/PriceStrategy/StrategySlideParent';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/SignupFlow1">
            <SignupFlow1/>
          </Route>
          <Route exact path="/SignupFlow2">
            <SignupFlow2/>
          </Route>
          <Route exact path="/SignupFlow3">
            <SignupFlow3/>
          </Route>
          <Route exact path="/PaymentPage1">
            <PaymentPage1/>
          </Route>
          <Route exact path="/PaymentPage2">
            <PaymentPage2/>
          </Route>
          <Route exact path="/PaymentPage3">
            <PaymentPage3/>
          </Route>
          <Route exact path="/PaymentPage4">
            <PaymentPage4/>
          </Route>
          <Route exact path="/SuccessPage">
            <SuccessPage/>
          </Route>
          <Route exact path="/FailurePage">
            <FailurePage/>
          </Route>
          <Route exact path="/Authenticate">
            <Authenticate/>
          </Route>
          <Route exact path="/CardOtp">
            <CardOtp/>
          </Route>
          <Route exact path="/">
            <OnboardingParent/>
          </Route>
          <Route exact path="/SplashMain">
            <SplashMain/>
          </Route>
          <Route exact path="/TopicInterestParent">
            <TopicInterestParent/>
          </Route>
          <Route exact path="/Homepage">
            <Homepage/>
          </Route>
          <Route exact path="/CarbonFootCalculator2">
            <CarbonFootCalculator2/>
          </Route> 
          <Route exact path="/CountrySelect">
            <CountrySelect/>
          </Route>
          <Route exact path="/Location">
            <Location/>
          </Route>
          <Route exact path="/QuestionsMain">
            <QuestionsMain/>
          </Route>
          <Route exact path="/StrategySlideParent">
            <StrategySlideParent/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
