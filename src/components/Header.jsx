import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import "../css/header.css";

function Header() {
  // get the data from redux store
  const { pageNo } = useSelector((state) => state.pageNumber);
  const { query } = useSelector((state) => state.search);

  return (
    <header className="header">
      <SearchBar />
      <p className="text-center request-url">
        Requesting :{" "}
        <span className="url">
          {`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageNo}`}
        </span>
      </p>
    </header>
  );
}

export default Header;
