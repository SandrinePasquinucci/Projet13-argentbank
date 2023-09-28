import "../styles/index.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoginFetch, saveUserProfil } from "../data/api";
import { getFirstName } from "../reducers/firstName";
import { getLastName } from "../reducers/lastName";
import { Navigate } from "react-router-dom";

function Profile() {
  // Use State
  let [newFirstName, setNewFirstName] = useState("");
  let [newLastName, setNewLastName] = useState("");

  // Use Selector / Use Effect
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.firstName.value);
  const lastName = useSelector((state) => state.lastName.value);

  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const user = getLoginFetch(token);
    user.then((obj) => {
      dispatch(getFirstName(obj.firstName));
      dispatch(getLastName(obj.lastName));
    });
  }, []);

  // Edit name
  const handleEdit = () => {
    document.getElementById("fullName").style.display = "none";
    document.getElementById("edit-button").style.display = "none";
    document.getElementById("edit-section").style.display = "block";
  };

  // Save Edit
  const handleEditSave = () => {
    document.getElementById("fullName").style.display = "block";
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
    dispatch(getFirstName(newFirstName));
    dispatch(getLastName(newLastName));
    const fullName = { firstName: newFirstName, lastName: newLastName };
    saveUserProfil(token, fullName);
  };

  // Cancel Edit
  const handleEditCancel = () => {
    document.getElementById("fullName").style.display = "block";
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
  };

  // Redirection
  if (token === 0) return <Navigate to="/login" />;

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 id="welcome-name">
          Welcome back
          <br />
          <span id="fullName">
            {firstName} {lastName}
          </span>
        </h1>
        <button id="edit-button" type="button" onClick={handleEdit}>
          Edit Name
        </button>
        <div id="edit-section">
          <form name="edit">
            <div className="profil-input-wrapper">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
            </div>
            <div className="profil-input-wrapper">
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </div>
          </form>
          <div className="btn-form">
            <button
              type="submit"
              className="save-button"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
