import SignupFlow1 from './components/SignupFlow1'
import SignupFlow2 from './components/SignupFlow2'
import SignupFlow3 from './components/SignupFlow3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

        </Switch>
      </Router>
    </>
  );
}

export default App;
