import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, fetchHomeData } from "../store/modules/home";
const Home = () => {
  //   const [count, setCount] = useState(0);
  const { count, homeData } = useSelector((state) => {
    return {
      count: state.home.count,
      homeData: state.home.homeData,
    };
  });
  const dispatch = useDispatch();
  console.log("homeData=>", homeData);
  return (
    <>
      <div>home</div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        homeAdd
      </button>
      <button
        onClick={() => {
          dispatch(fetchHomeData());
        }}
      >
        获取异步homeData
      </button>
      <label className="pure-material-slider">
        <input type="range" min="0" max="100" />
        <span>Slider</span>
      </label>
    </>
  );
};

export default Home;
