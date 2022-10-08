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
    <li
      key={id}
      className='flex justify-between items-baseline p-5 border-2'
    >
      <div>
        <b>{title}</b>
        <pre>{text}</pre>
      </div>

      <button
        className='py-3 px-4 text-white bg-red-400'
        onClick={() => removeNote(id)}
      >&times;</button>
    </li>
  );
};

export default Note;
