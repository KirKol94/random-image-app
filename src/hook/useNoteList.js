import { useDispatch, useSelector } from 'react-redux';
import { notesSelector, searchSelector } from '../store/selectors';
import { searchIsNotSuccessAC, searchIsSuccessAC } from '../store/reducers/searchReducer';

export default function useNoteList() {
  const dispatch = useDispatch();

  const allNotes = useSelector(notesSelector);
  const search = useSelector(searchSelector);

  const stringIncludes = (str, searchStr) => str.toLowerCase().includes(searchStr.toLowerCase());

  const filteredNotes = allNotes.filter((note) => stringIncludes(note.text, search)
    || stringIncludes(note.title, search));

  const notes = search !== '' ? filteredNotes : allNotes;

  if (search && filteredNotes.length) dispatch(searchIsSuccessAC());
  else dispatch(searchIsNotSuccessAC());

  return { notes };
}
