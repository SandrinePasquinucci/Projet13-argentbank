import "../styles/index.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../data/api";
import { getToken } from "../reducers/token";
import { Navigate } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  // Use State
  let [loginErreur, setLoginErreur] = useState("");
  let [loginStatus, setLoginStatus] = useState(0);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [remember, setRemember] = useState(false);

  // Use Selector
  const token = useSelector((state) => state.token.value);
  // const email = useSelector((state) => state.email.value);

  // Use Effect
  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      ajoutToken(localStorage.getItem("token"));
    }
  });

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const login = getLogin({ email: email, password: password });
    login.then((obj) => {
      if (obj.status !== 400) {
        setLoginStatus(obj.status);
        ajoutToken(obj.token);
      } else {
        setLoginErreur(obj.message);
      }
    });
  };

  // Handle Remember
  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };

  // Add the token
  const dispatch = useDispatch();
  const ajoutToken = (token) => {
    // if (remember === true) {
    localStorage.setItem("token", token);
    // }
    dispatch(getToken(token));
    if (remember === true) {
      localStorage.setItem("userName", email);
    } else {
      localStorage.setItem("userName", "");
    }
    localStorage.setItem("check", remember);
  };
  const mailAuto = localStorage.getItem("userName");
  const check = localStorage.getItem("check");
  // Redirection
  if (
    token !== 0 ||
    loginStatus === 200 ||
    token === localStorage.getItem("token")
  )
    return <Navigate to="/profile" />;

  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder={mailAuto}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={check}
              onChange={handleRemember}
            />

            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div>{loginErreur}</div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
export default Login;
