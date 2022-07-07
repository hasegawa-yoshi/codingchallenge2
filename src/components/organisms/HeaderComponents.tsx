import React from "react";
import SearchBox from "../molecules/SearchBox";

const HeaderComponents = () => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <SearchBox />
    </div>
  );
};

export default HeaderComponents;
