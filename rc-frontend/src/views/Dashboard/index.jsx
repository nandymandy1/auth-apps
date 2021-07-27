import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ isAuth, authLoading, ...rest }) => {
  if (!isAuth) {
    return <Redirect to="/auth/login" />;
  } else {
    return <Route {...rest} />;
  }
};

const mapStateToProps = (state) => ({
  ...state.auth,
});

export default connect(mapStateToProps)(PrivateRouter);
