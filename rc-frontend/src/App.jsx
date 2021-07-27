import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Alert } from "react-bootstrap";
import PublicRouter from "./views/Auth";
import PrivateRouter from "./views/Dashboard";
import Footer from "./components/includes/Footer";
import Header from "./components/includes/Header";

import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Dashboard from "./views/Dashboard/Dashboard";
import Profile from "./views/Dashboard/Profile";
import { connect } from "react-redux";

const App = ({ message, type }) => {
  return (
    <>
      <Router>
        <div id="app" className="d-flex flex-column">
          <Header />
          {message ? <Alert variant={type}>{message}</Alert> : null}
          <div className="container flex-grow-1 py-5">
            <Switch>
              <PublicRouter
                exact
                component={Login}
                path={["/", "/auth/login"]}
              />
              <PublicRouter
                exact
                component={Register}
                path={"/auth/register"}
              />
              <PrivateRouter path="/dashboard" component={Dashboard} />
              <PrivateRouter path="/profile" component={Profile} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({ ...state.messages });

export default connect(mapStateToProps, {})(App);
