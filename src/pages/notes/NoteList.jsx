import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import notesSelector from '../../store/selectors';

function NoteList() {
  const notes = useSelector(notesSelector);

  return (
    <ul className="container mx-auto mt-5 space-y-3">
      {notes.map((note) => (<Note key={note.id} note={note} />))}
    </ul>
  );
}

export default NoteList;
