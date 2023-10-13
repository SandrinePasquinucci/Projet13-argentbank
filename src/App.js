import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      {/* https://devstory.net/12139/comprendre-le-react-router-avec-un-exemple-basique */}
      {/* BrowserRouter différent HashRouter */}
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/Home" />} path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
