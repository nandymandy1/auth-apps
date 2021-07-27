import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/reducer/auth/actions";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const PublicLinks = () => (
  <>
    <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to="/">
        Home
      </NavLink>
    </li>
    <NavDropdown title="Authentication" id="collasible-nav-dropdown">
      <li>
        <Link className="dropdown-item" to="/auth/login">
          Login
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/auth/register">
          Register
        </Link>
      </li>
    </NavDropdown>
  </>
);

const PrivateLinks = ({ handleLogout }) => (
  <>
    <NavDropdown title="Account" id="collasible-nav-dropdown">
      <li>
        <Link className="dropdown-item" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/settings">
          Settings
        </Link>
      </li>
    </NavDropdown>
    <li className="nav-item" style={{ cursor: "pointer" }}>
      <a className="nav-link" onClick={handleLogout}>
        Logout
      </a>
    </li>
  </>
);

const Header = ({ isAuth, logoutUser }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">React Auth</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {isAuth ? (
              <PrivateLinks handleLogout={handleLogout} />
            ) : (
              <PublicLinks />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({ ...state.auth });
const mapActionsToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
