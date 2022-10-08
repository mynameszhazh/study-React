import React, { Component } from "react";
import "./index.css";

export default class BottomNav extends Component {
  render() {
    return (
      <div>
        <h2>BottomNav</h2>
        <NavItem></NavItem>
      </div>
    );
  }
}

function NavItem() {
  return <div>123123</div>;
}
