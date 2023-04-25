import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus, FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NoteItems from '../component/NoteItems';


const Notes = ({notes}) => {

  const [search, setSearch] = useState(false);
  const [text , setText] = useState('');
  const [filterNotes , setFilterNotes] = useState(notes);

  const handleSearch =() =>{
    setFilterNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note; 
      }
    }))
  }
  useEffect(handleSearch ,[text])

  return (
   <section>
    <header className="notes__header">
       {!search && <h2>My notes</h2>}
       {search && <input type="text" value={text} onChange={(e)=> {setText(e.target.value); handleSearch(e)}} autoFocus placeholder='keywords...' />}
        <button className='btn' onClick={()=>setSearch(!search)}>{search ? <FaRegWindowClose /> : <FaSearch/>}</button>
    </header>
    
    <div className="notes__container">
    {filterNotes.length === 0 && <p className='empty__notes'>no notes found</p>}
        {
          filterNotes.map((note) => <NoteItems key={note.id} note={note} />)
        }
    </div>
     <Link to='/creat-notes' className='btn add__btn'><FaPlus /></Link>
   </section>
  )
}

export default Notes
