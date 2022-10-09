import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notesSelector, searchSelector } from '../../store/selectors';
import Note from './Note';
import { searchIsNotSuccessAC, searchIsSuccessAC } from '../../store/reducers/searchReducer';

function NoteList() {
  const dispatch = useDispatch();

  const allNotes = useSelector(notesSelector);
  const search = useSelector(searchSelector);

  const stringIncludes = (str, searchStr) => str.toLowerCase().includes(searchStr.toLowerCase());

  const filteredNotes = allNotes.filter((note) => stringIncludes(note.text, search)
    || stringIncludes(note.title, search));

  const notes = search !== '' ? filteredNotes : allNotes;

  if (search && filteredNotes.length) dispatch(searchIsSuccessAC());
  else dispatch(searchIsNotSuccessAC());

  return (
    <ul className="container mx-auto mt-5 space-y-3">
      {notes.map((note) => (<Note note={note} />))}
    </ul>
  );
}

export default NoteList;
