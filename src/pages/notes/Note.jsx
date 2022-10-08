import React from 'react';
import {useDispatch} from "react-redux";
import {removeNoteAC} from "../../store/reducers/notesReducer";

const Note = ({note}) => {
  const dispatch = useDispatch()
  const {title, text, id} = note
  const removeNote = (id) => {
    dispatch(removeNoteAC(id))
  }

  return (
    <li key={id}>
      <b>{title}</b>
      <p>{text}</p>
      <button onClick={() => removeNote(id)}>&times;</button>
    </li>
  );
};

export default Note;
