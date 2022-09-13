import React from "react";
import "./index.css";
import store from "../../store/index";

export default function TestRedux() {
  const add = () => {
    console.log("add");
    store.dispatch("DECREMENT");
  };
  const increment = () => {
    console.log("increment");
    store.dispatch("INCREMENT");
  };
  // 这样的东西就可以解决我的所有的问题吗
  useEffect(() => {
    store.subscribe();
  }, []);

  return (
    <div className="TestRedux">
      <button onClick={add}>add</button>
      <button onClick={increment}>increment</button>
    </div>
  );
}
