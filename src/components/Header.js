import "../styles/index.css";

import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../reducers/token";
import { getLoginFetch } from "../data/api";
import { getFirstName } from "../reducers/firstName";
import logo from "../assets/argentBankLogo.png";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  // Use Selector
  const firstName = useSelector((state) => state.firstName.value);
  const token = useSelector((state) => state.token.value);

  // Use Effect
  const dispatch = useDispatch();
  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      dispatch(getToken(localStorage.getItem("token")));
      const user = getLoginFetch(token);
      user.then((obj) => {
        dispatch(getFirstName(obj.firstName));
      });
    }
  });

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
        {token === 0 && (
          <>
            <NavLink to="/login" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          </>
        )}

        {token !== 0 && (
          <>
            <NavLink to="/profile" className="main-nav-item">
              <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
            </NavLink>
            <NavLink to="/logout" className="main-nav-item">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
