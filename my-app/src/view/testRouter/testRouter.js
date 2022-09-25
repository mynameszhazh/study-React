import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactRedux from "../reactRedux/reactRedux";
import Dialog from "../dialog/index";
import TestRedux from "../testRedux/index";

export default class testRouter extends Component {
  render() {
    return (
      <div>
        <h2>router</h2>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/dialog">dialog</Link>
          <Link to="/testRedux">testRedux</Link>

          <Routes>
            <Route path="/" element={<ReactRedux/>}></Route>
            <Route path="/dialog" element={<Dialog/>}></Route>
            <Route path="/testRedux" element={<TestRedux/>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
