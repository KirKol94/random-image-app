import React from 'react';
import Note from './Note';
import useNoteList from '../../hook/useNoteList';

function NoteList() {
  const { notes } = useNoteList();

  return (
    <ul className="container mx-auto mt-5 space-y-3">
      {notes.map((note) => (<Note key={note.id} note={note} />))}
    </ul>
  );
}

export default NoteList;
