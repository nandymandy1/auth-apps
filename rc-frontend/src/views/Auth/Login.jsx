import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/utils/Forms/Input";
import { loginUser } from "../../store/reducer/auth/actions";
import LodingButtonContent from "../../components/utils/LodingButtonContent";

const Login = ({ loginUser, isAuth, authLoading }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  if (!isAuth) {
    return (
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <h3 className="card-title">Login</h3>
                <Input
                  name="username"
                  label="Username"
                  onChange={onChange}
                  value={user.username}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  onChange={onChange}
                  value={user.password}
                />
                <div className="form-group pt-4">
                  <button className="btn btn-primary w-100" type="submit">
                    {authLoading ? <LodingButtonContent /> : "Login"}
                  </button>
                </div>
                <div className="form-group pt-2">
                  <Link className="btn btn-light w-100" to="/auth/register">
                    Need an account? Register now.
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/auth/register" />;
  }
};

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
