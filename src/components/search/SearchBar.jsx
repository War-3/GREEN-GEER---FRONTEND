import React, { useState } from "react";
import "./searchbar.scss";
import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  // Handler for input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Validation example: Check if input is empty
    if (value.trim() === "") {
      setError("Search input cannot be empty.");
    } else {
      setError("");
    }
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      setError("Please enter a valid search query.");
    } else {
      console.log("Search query submitted:", query);
      setError("");
    }
  };

  return (
    <div id="SearchBar">
      {/* <div className="section"> */}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <img src={search} alt="search-icon" />
          <input
            type="text"
            placeholder="Search equipment by name, category or specification..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">
            <img src={filter} alt="filter-icon" />
          </button>
        </div>
        <div className="error">{error && <p>{error}</p>}</div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
