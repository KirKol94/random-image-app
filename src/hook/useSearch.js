import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTypingAC } from '../store/reducers/searchReducer';

export default function useSearch() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
    dispatch(searchTypingAC(value));
  };

  return { search, onChangeHandler };
}
