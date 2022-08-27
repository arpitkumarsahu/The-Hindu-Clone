import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import { News } from "./News";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://arpit-fake-server.herokuapp.com/news")
      .then((d) => d.json())
      .then((d) => dispatch(getData(d)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <div>
      <News />
    </div>
  );
};
