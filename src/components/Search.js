import React from "react";

function Search({searchTerm, setSearchTerm}) {

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon" aria-label="Search"></i>
    </div>
  );
}

export default Search;
