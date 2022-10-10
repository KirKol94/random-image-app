import React from 'react';
import useSearch from '../../../hook/useSearch';

function Search() {
  const { search, onChangeHandler } = useSearch();

  return (
    <form>
      <input
        className="p-3 border-2 border-blue-400"
        type="search"
        placeholder="🔍 Найти"
        value={search}
        onChange={onChangeHandler}
      />
    </form>
  );
}

export default Search;
