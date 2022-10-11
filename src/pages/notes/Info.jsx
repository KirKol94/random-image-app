import React from 'react';
import InfoText from './InfoText';
import useInfo from '../../hook/useInfo';

function Info() {
  const { notes } = useInfo();

  if (notes.length === 0) {
    return (
      <InfoText text="Записей нет" />
    );
  }
}

export default Info;
