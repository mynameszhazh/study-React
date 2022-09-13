import React, { Component } from "react";
import "./xfrom.css";

export default function XFromCreate(Com) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: {} };
      this.options = {};
    }
    handleChange = (e) => {
      let { name, value } = e.target;
      this.validate({...this.state, [name]: value})
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
            {<div className="form-error">{this.state.error[field]}</div>}
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
    validate = (state) => {
      const error = {};
      for (let name in this.options) {
        if (!state[name]) {
          error[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, error });
    };
    validateValue = (cb) => {
      const state = { ...this.state };
      this.validate(state);
      if (JSON.stringify(this.state.error) == "{}") {
        cb(undefined, state);
      } else {
        cb(this.state.error, state);
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
