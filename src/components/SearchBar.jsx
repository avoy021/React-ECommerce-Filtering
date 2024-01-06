import { useState } from "react";

const SearchBar = ({ searchText, setSearchText, searchFilter,searchFilterOnChange }) => {

  function handleClick() {
    searchFilter();
  }
  function filterOnChange(e) {
    setSearchText(() => e.target.value)
    searchFilterOnChange();
  }
  
  function handleInputKeyDown(e) {
    if (e.key === "Enter") {
      searchFilter();
    }
  }
  return (
    <>
      <div className="search-bar my-4 w-full">
        <div className="search-text w-2/4 my-full mx-auto flex ">
          <input
            type="text"
            name="searchText"
            id="searchText"
            className="w-full h-full rounded border-2 border-solid py-2 px-1 mr-2"
            placeholder="Search shoes"
            value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
            onChange={filterOnChange}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-green-300 rounded py-2 px-4 hover:bg-green-400"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
