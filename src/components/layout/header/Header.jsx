import React from 'react';
import Search from "./Search";
import {useSelector} from "react-redux";
import {notesSelector} from "../../../store/selectors";

const Header = () => {
  const notes = useSelector(notesSelector)
  return (
    <header className='py-5 border-b-2'>
      <section className='container mx-auto flex justify-between items-center'>
        <b className='text-2xl'>React / redux</b>
        {notes.length !== 0 && <Search/>}
      </section>
    </header>
  );
};

export default Header;
