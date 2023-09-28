import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../reducers/token";
import { getFirstName } from "../reducers/firstName";
import { getLastName } from "../reducers/lastName";
import { Navigate } from "react-router-dom";

function Logout() {
  // Change the token
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken(0));
    dispatch(getFirstName(""));
    dispatch(getLastName(""));

    localStorage.removeItem("token");
  });

  // Redirection
  return <Navigate to="/" />;
}

export default Logout;
