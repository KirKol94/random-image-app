import { useDispatch } from 'react-redux';
import { removeNoteAC } from '../store/reducers/notesReducer';

export default function useNote(note) {
  const dispatch = useDispatch();
  const { title, text, id } = note;
  const removeNote = (noteId) => {
    dispatch(removeNoteAC(noteId));
  };

  return {
    id, title, text, removeNote,
  };
}
