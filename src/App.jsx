import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNoteAC, removeNoteAC} from "./store/reducers/notesReducer";

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
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

  const removeNote = (id) => {
    console.log(id)
    dispatch(removeNoteAC(id))
  }

  return (<div className='container mx-auto'>
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
      <input type="submit"
             value='Добавить'
      />
    </form>

    {notes.length === 0 && <h1>Записей нет</h1>}

    <ul>
      {notes.map(({title, text, id}) => (<li key={id}>
        <b>{title}</b>
        <p>{text}</p>
        <button onClick={() => removeNote(id)}>&times;</button>
      </li>))}
    </ul>
  </div>);
};

export default App;
