import React from 'react';
import {useState} from "react";
import {addNoteAC} from "../../store/reducers/notesReducer";
import {useDispatch} from "react-redux";

const AddNote = () => {
  const dispatch = useDispatch()

  const [note, setNote] = useState({title: '', text: ''});

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setNote({...note, [name]: value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addNoteAC({...note, id: new Date().getTime()}))
    setNote({title: '', text: ''})
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name='title'
        value={note.title}
        onChange={onChangeHandler}
      />
      <textarea
        name="text"
        value={note.text}
        onChange={onChangeHandler}
      />
      <input
        type="submit"
        value='Добавить'
      />
    </form>
  );
};

export default AddNote;
