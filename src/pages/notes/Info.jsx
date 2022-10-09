import React from 'react';
import { useSelector } from 'react-redux';
import { notesSelector, searchIsSuccessSelector, searchSelector } from '../../store/selectors';
import InfoText from './InfoText';

function Info() {
  const notes = useSelector(notesSelector);
  const searchIsSuccess = useSelector(searchIsSuccessSelector);
  const search = useSelector(searchSelector);

  return (
    <>
      {notes.length === 0 && <InfoText text="Записей нет" />}
      {(search && !searchIsSuccess) && <InfoText text="Ничего не найдено" />}
    </>
  );
}

export default Info;
