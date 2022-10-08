import React from 'react';
import {useSelector} from "react-redux";
import {notesSelector} from "../../store/selectors";
import Note from "./Note";

const NoteList = () => {
  const notes = useSelector(notesSelector)

  return (
    <ul className='container mx-auto mt-5 space-y-3'>
      {notes.map((note) => (
        <Note note={note}/>
      ))}
    </ul>
  );
};

export default NoteList;
