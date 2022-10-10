import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAC } from '../store/reducers/notesReducer';

export default function useAddNote() {
  const dispatch = useDispatch();

  const [note, setNote] = useState({ title: '', text: '' });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (note.title.trim() || note.text.trim()) {
      dispatch(addNoteAC({ ...note, id: new Date().getTime() }));
      setNote({ title: '', text: '' });
    }
  };

  return { note, onChangeHandler, onSubmit };
}
