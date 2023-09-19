import "../styles/index.css";

import { NavLink, Link } from "react-router-dom";

import logo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>

        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
        </NavLink>

        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
