import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
// import App from './App';
// import App2 from './App2';

// import From from './view/antd/index';
// import TestDialog from "./view/dialog/index";
import TestRedux from './view/testRedux/index'

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    {/* <App2 /> */}

    {/* 表单 */}
    {/* <From /> */}

    {/* 弹窗 */}
    {/* <TestDialog></TestDialog> */}

    {/* 测试 redux */}
    <TestRedux></TestRedux>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
