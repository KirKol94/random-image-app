import { useSelector } from 'react-redux';
import notesSelector from '../store/selectors';

export default function useInfo() {
  const notes = useSelector(notesSelector);

  return { notes };
}
