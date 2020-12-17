import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  console.log(props, "props");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* onSubmit we go to the /pokemon route using our state as a param */
    props.history.push(`/pokemon/${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <label for="search">Search:</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default SearchBar;

/*
alternative to form:
  <div className="search-wrapper">
    <p>Search:</p>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
  </div>
*/
