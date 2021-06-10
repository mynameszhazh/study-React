// 负责逻辑控制
import React from 'react';
// vdom - dom
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./stote"
import { Provider } from 'react-redux'

// const name = 'reate'
// const obj = {
//   name: 'xjh',
//   age: 18
// }
// const jsx = (
//   <div>hello,{name}</div>
// )
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
