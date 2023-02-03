import React, { useState } from "react";
import { useSelector } from "react-redux";

const About = () => {
  //   const [count, setCount] = useState(0);
  const { count } = useSelector((state) => {
    return {
      count: state.home.count,
    };
  });
  return <div>about----{count}</div>;
};

export default About;
