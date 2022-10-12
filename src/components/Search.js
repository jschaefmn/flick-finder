import React, { useState } from 'react';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // resets input field to be blank
  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className='search'>
      {/* when change event occurs, call handleSearchInputChange to update with new value */}
      <input value={searchValue} onChange={handleSearchInputChange} type='text' />

      <input onClick={callSearchFunction} type='submit' value='SEARCH' />
    </form>
  );
};

export default Search;
