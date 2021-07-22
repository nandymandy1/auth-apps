import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
