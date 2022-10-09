import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAC } from '../../store/reducers/notesReducer';

function AddNote() {
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

  return (
    <details>
      <summary className="p-5 text-center bg-gray-200 hover:cursor-pointer">
        <span>
          Новая запись
          <b>⊕</b>
        </span>
      </summary>

      <div className="min-h-[500px] flex flex-col justify-center items-center bg-gray-200">
        <form
          className="w-[500px] max-w-[500px] flex flex-col space-y-3"
          onSubmit={onSubmit}
        >
          <input
            className="p-3 border border-blue-400"
            type="text"
            name="title"
            value={note.title}
            placeholder="Заголовок"
            onChange={onChangeHandler}
          />
          <textarea
            className="p-3 border border-blue-400"
            name="text"
            value={note.text}
            placeholder="Описание"
            onChange={onChangeHandler}
          />
          <button
            className="p-3 bg-blue-400 text-white"
            type="submit"
          >
            Добавить
          </button>
        </form>
      </div>
    </details>
  );
}

export default AddNote;
