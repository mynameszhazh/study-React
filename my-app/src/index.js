// react 18 的写法
// import React from "react";
// import ReactDOM from "react-dom/client";

import React from './xreact'
import ReactDOM from "./xreact/react-dom";
import "./index.css";
// import "antd/dist/antd.css";
// import App from './App';
// import App2 from './App2';

// import From from './view/antd/index';
// import TestDialog from "./view/dialog/index";
// import TestRedux from './view/testRedux/index'
// import ReactRedux from "./view/reactRedux/reactRedux";
// import TestRouter from "./view/testRouter/testRouter";
// import TestXRouter from "./view/testRouter/testXRouter";
// import ExampleLogin from "./view/exampleLogin";

// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { Provider } from "./components/xReactRedux/xreactRedux";
// import store from "./store";

// 手写react 测试
const jsx = <div className="border">app</div>
ReactDOM.render(jsx, document.getElementById('root'))

// 功能测试
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     {/* <App /> */}
//     {/* <App2 /> */}

//     {/* 表单 */}
//     {/* <From /> */}

//     {/* 弹窗 */}
//     {/* <TestDialog></TestDialog> */}

//     {/* 测试 redux */}
//     {/* <TestRedux></TestRedux> */}
//     {/* <ReactRedux></ReactRedux> */}

//     {/* router */}
//     {/* <TestRouter></TestRouter> */}
//     {/* <TestXRouter></TestXRouter> */}

//     {/* 项目实战 */}
//     <ExampleLogin></ExampleLogin>
//   </Provider>
//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
