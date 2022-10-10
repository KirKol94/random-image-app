import React from 'react';
import PropTypes from 'prop-types';
import useNote from '../../hook/useNote';

function Note({ note }) {
  const {
    id, title, text, removeNote,
  } = useNote(note);

  return (
    <li
      className="flex justify-between items-baseline p-5 border-2"
    >
      <div>
        <b>{title}</b>
        <pre>{text}</pre>
      </div>
      <button
        type="submit"
        className="py-3 px-4 text-white bg-red-400"
        onClick={() => removeNote(id)}
      >
        &times;
      </button>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Note;
