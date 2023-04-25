import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NoteItems from '../component/NoteItems';


const Notes = ({notes}) => {
  return (
   <section>
    <header className="notes__header">
        <h2>My notes</h2>
        {/* <input type="text" autoFocus placeholder='keywords...' /> */}
        <button className='btn'><FaSearch/></button>
    </header>
    
    <div className="notes__container">
        {
           notes.map((note) => <NoteItems key={note.id} note={note} />)
        }
    </div>
     <Link className='btn add__btn'><FaPlus /></Link>
   </section>
  )
}

export default Notes
