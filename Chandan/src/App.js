import Signup1 from './components/Signup1'
import Signup3 from './components/Signup3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup1">
            <Signup1/>
          </Route>
          <Route exact path="/signup3">
            <Signup3/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
