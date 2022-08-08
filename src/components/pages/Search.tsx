import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const presearchword = useLocation().search;

  const searchword = presearchword.slice(1);

  return <div>{searchword}</div>;
};

export default Search;
