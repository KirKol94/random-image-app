import React from 'react';
import {useSelector} from "react-redux";
import {notesSelector} from "../../store/selectors";
import Note from "./Note";

const NoteList = () => {

  const notes = useSelector(notesSelector)

  return (
    <>
      {notes.length === 0 && <h1>Записей нет</h1>}

      <ul>
        {notes.map((note) => (
          <Note note={note}/>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
