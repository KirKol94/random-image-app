import React from 'react';
import {useSelector} from "react-redux";
import AddNote from "./notes/addNote";
import NoteList from "./notes/NoteList";
import {notesSelector} from "../store/selectors";

const Notes = () => {
  const notes = useSelector(notesSelector)
  return (
    <div>
      <AddNote/>
      {notes.length === 0 && <h1 className='py-5 text-center text-2xl'>Записей нет</h1>}
      <NoteList/>
    </div>
  );
};

export default Notes;
