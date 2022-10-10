import { useSelector } from 'react-redux';
import { notesSelector, searchIsSuccessSelector, searchSelector } from '../store/selectors';

export default function useInfo() {
  const notes = useSelector(notesSelector);
  const searchIsSuccess = useSelector(searchIsSuccessSelector);
  const search = useSelector(searchSelector);

  return { notes, search, searchIsSuccess };
}
