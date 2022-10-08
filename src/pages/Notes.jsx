import React from 'react';
import {useDispatch} from "react-redux";
import AddNote from "./notes/addNote";
import NoteList from "./notes/NoteList";

const Notes = () => {
  const dispatch = useDispatch()

  return (
    <div className='container mx-auto'>
      <AddNote/>
      <NoteList/>
    </div>
  );
};

export default Notes;
