import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  console.log(props, "props");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/pokemon/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* onSubmit we go to the /pokemon route using our state as a param */}
      <div className="search-wrapper">
        <label>Search:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default SearchBar;
