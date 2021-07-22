import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("USERER", user);
  };

  const resetFields = () =>
    setUser({
      username: "",
      password: "",
    });

  return (
    <div className="row py-5">
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
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

export default Login;
