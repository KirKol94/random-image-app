import React from 'react';
import InfoText from './InfoText';
import useInfo from '../../hook/useInfo';

function Info() {
  const { notes, searchIsSuccess, search } = useInfo();

  return (
    <>
      {notes.length === 0 && <InfoText text="Записей нет" />}
      {(search && !searchIsSuccess) && <InfoText text="Ничего не найдено" />}
    </>
  );
}

export default Info;
