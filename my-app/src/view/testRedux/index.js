import React, { useEffect, useState } from "react";
import "./index.css";
import store from "../../store/index";

export default function TestRedux() {
  const add = () => {
    // console.log("add");
    store.dispatch("DECREMENT");
  };
  const increment = () => {
    // console.log("increment");
    store.dispatch("INCREMENT");
  };

  const asyncAdd = () => {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch("INCREMENT");
      }, 2000);
    });
  };
  const [refresh, setRefresh] = useState(false);

  const doRefresh = () => setRefresh(true);

  useEffect(() => {
    refresh && setTimeout(() => setRefresh(false));
    store.subscribe(() => {
      doRefresh();
    });
  }, []);

  return (
    <div className="TestRedux">
      <h2>{store.getState()}</h2>
      <button onClick={add}>add</button>
      <button onClick={increment}>increment</button>
      <button onClick={asyncAdd}>asyncAdd</button>
    </div>
  );
}
