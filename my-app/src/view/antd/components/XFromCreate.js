import React, { Component } from "react";
import "./xfrom.css";

export default function XFromCreate(Com) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    };
    // 就算是这里 也会有this 的指向问题出现
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return (inputCom) => {
        return (
          <div className="from-item">
            {React.cloneElement(inputCom, {
              name: field,
              value: this.state[field] || "",
              onChange: this.handleChange,
            })}
            {<div className="form-error">{option.rules[0].message}</div>}
          </div>
        );
      };
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (field) => {
      return this.state[field];
    };
    validateValue = (cb) => {
      const error = {};
      const state = { ...this.state };
      for (let name in this.options) {
        if (state[name] == undefined) {
          error[name] = "error";
        }
      }
      if (JSON.stringify(error) == "{}") {
        cb(undefined, state);
      } else {
        cb(error, state);
      }
    };
    render() {
      return (
        <div className="HocPageBorder">
          <Com
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateValue={this.validateValue}
          ></Com>
        </div>
      );
    }
  };
}
