import { connect } from "react-redux";

const Profile = ({ user }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <p>
              <span className="form-label">Name </span>
              {user.name}
            </p>
            <p>
              <span className="form-label">Email </span>
              {user.email}
            </p>
            <p>
              <span className="form-label">Username </span>
              {user.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state.auth });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
