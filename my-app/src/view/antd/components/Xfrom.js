import React, { Component } from "react";
import XFromCreate from "./XFromCreate";

const nameRules = { required: true, message: "please input ur name" };
const pwdRules = { required: true, message: "please input ur pwd" };
@XFromCreate
export default class Xfrom extends Component {
  onsubmit = (e) => {
    let { getFieldsValue, getFieldValue, validateValue } = this.props;
    // console.log(getFieldsValue(), getFieldValue("name"));
    validateValue((error, success) => {
      if (error) {
        console.log(error, "error");
      } else {
        console.log(success, "success");
      }
    });
  };
  render() {
    let { getFieldDecorator } = this.props;
    return (
      <div className="xfrom">
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input className="name_input" placeholder="please input ur name" />
        )}
        {getFieldDecorator("password", { rules: [pwdRules] })(
          <input className="pwd_input" placeholder="please input ur passwoed" />
        )}
        <button className="xfrom-btn" onClick={this.onsubmit}>
          提叫
        </button>
      </div>
    );
  }
}
