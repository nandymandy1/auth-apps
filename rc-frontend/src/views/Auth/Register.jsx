import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../../components/utils/Forms/Input";
import { registerUser } from "../../store/reducer/auth/actions";

const Register = ({ registerUser }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(user);
  };

  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <h3 className="card-title">Register</h3>
              <Input
                name="name"
                label="Name"
                value={user.name}
                onChange={onChange}
              />
              <Input
                name="username"
                onChange={onChange}
                value={user.username}
                label="Username"
              />
              <Input
                type="password"
                name="password"
                label="Password"
                onChange={onChange}
                value={user.password}
              />
              <Input
                type="email"
                name="email"
                label="Email"
                onChange={onChange}
                value={user.email}
              />
              <div className="form-group pt-4">
                <button className="btn btn-primary w-100" type="submit">
                  Register
                </button>
              </div>
              <div className="form-group pt-2">
                <Link className="btn btn-light w-100" to="/auth/login">
                  Already have an account? Login now.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state.auth });

const mapActionsToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Register);
