import React, { useState } from "react";
import Header from "./Header";
import { Menu } from "./Menu";


export const HomeHeader = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <Header handleToggle={handleToggle} />
      ) : (
        <Menu handleToggle={handleToggle} />
      )}
    </div>
  );
};
