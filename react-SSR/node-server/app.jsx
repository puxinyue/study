import React, { useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import routes from "./router";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>

      <Link to={"/"}>
        <button> home</button>
      </Link>
      <Link to={"/about"}>
        <button> about</button>
      </Link>

      {/* 路由站位 */}
      {useRoutes(routes)}
    </div>
  );
};

export default App;
