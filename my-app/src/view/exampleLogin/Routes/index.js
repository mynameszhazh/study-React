import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/LoginPage/idnex";
import UserPage from "../pages/UserPage";

export default function Routes(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </Router>
  );
}
