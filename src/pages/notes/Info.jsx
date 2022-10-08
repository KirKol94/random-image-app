import React from 'react';
import {useSelector} from "react-redux";
import {notesSelector, searchIsSuccessSelector, searchSelector} from "../../store/selectors";

const Info = () => {
  const notes = useSelector(notesSelector)
  const searchIsSuccess = useSelector(searchIsSuccessSelector)
  const search = useSelector(searchSelector)


  return (
    <>
      {notes.length === 0 && <h1 className='py-5 text-center text-2xl'>Записей нет</h1>}
      {(search && !searchIsSuccess) && <h1 className='py-5 text-center text-2xl'>Ничего не найдено</h1>}
    </>
  );
};

export default Info;
