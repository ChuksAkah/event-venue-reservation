import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  return (
    <div>
      <h1>Search Results</h1>
      {/* Display search results here */}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default SearchResults;
