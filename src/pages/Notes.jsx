import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Notes = () => {
  return (
   <section>
    <header className="notes__header">
        <h2>My notes</h2>
        {/* <input type="text" autoFocus placeholder='keywords...' /> */}
        <button className='btn'><FaSearch/></button>
    </header>
   </section>
  )
}

export default Notes
