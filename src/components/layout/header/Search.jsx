import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTypingAC } from '../../../store/reducers/searchReducer';

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
    dispatch(searchTypingAC(value));
  };
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
