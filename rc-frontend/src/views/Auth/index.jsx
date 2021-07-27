import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRouter = ({ isAuth, ...rest }) => {
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  } else {
    return <Route {...rest} />;
  }
};

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps)(PublicRouter);
