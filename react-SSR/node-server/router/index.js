import React from "react";
import Home from "../src/pages/home.jsx";
import About from "../src/pages/about.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
