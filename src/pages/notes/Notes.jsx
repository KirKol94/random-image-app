import React from 'react';
import AddNote from "./addNote";
import NoteList from "./NoteList";
import Info from "./Info";

const Notes = () => {
  return (
    <div>
      <AddNote/>
      <Info />
      <NoteList/>
    </div>
  );
};

export default Notes;
