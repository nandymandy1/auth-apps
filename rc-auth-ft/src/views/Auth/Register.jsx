import { useState } from "react";
import { connect } from "react-redux";
import { registerUser, logoutUser } from "../../store/reducers/Auth/actions";

const Register = ({ registerUser, isAuth, logoutUser }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("USERER", user);
    registerUser(user);
  };

  const resetFields = () =>
    setUser({
      username: "",
      password: "",
      email: "",
      name: "",
    });

  return (
    <div className="row py-5">
      {isAuth && (
        <button className="btn btn-primary" onClick={logoutUser}>
          Logout
        </button>
      )}
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="name" className="text-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={user.name}
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="username" className="text-primary">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={onChange}
                  value={user.username}
                  placeholder="Username"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password" className="text-primary">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={user.password}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email" className="text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={user.email}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-secondary"
                  onClick={resetFields}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapActionsToProps = {
  registerUser,
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Register);
