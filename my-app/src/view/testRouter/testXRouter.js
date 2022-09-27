import React, { Component } from "react";
import BrowserRouter from "../../components/x-react-router-dom/BrowserRouter";
import Link from "../../components/x-react-router-dom/Link";
import Route from "../../components/x-react-router-dom/Route";
import Switch from "../../components/x-react-router-dom/Switch";
export default class testRouter extends Component {
  render() {
    return (
      <div>
        <h2>router</h2>
        <BrowserRouter>
          <Link to="/reactRedux">reactRedux</Link>
          <Link to="/dialog">dialog</Link>
          <Link to="/test">test</Link>
          <Switch>
            <Route path="/reactRedux" component={ReactRedux}></Route>
            <Route path="/dialog" children={() => <Dialog />}></Route>
            <Route path="/test" render={() => <TestRedux />}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function ReactRedux() {
  return <h1>ReactRedux</h1>;
}
function Dialog() {
  return <h1>Dialog</h1>;
}
function TestRedux() {
  return <h1>TestRedux</h1>;
}
