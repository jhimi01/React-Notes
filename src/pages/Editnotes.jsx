import React, { useState } from "react";
import { FaAngleLeft, FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCreateDate from "../component/useCreateDate";

const Editnotes = ({notes, setNotes}) => {

  const { id } = useParams();
  console.log(id)
  const note = notes.find(item => item.id === id);
  console.log(note)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleform =(e)=>{
  e.preventDefault();
 if (title && details ) {
  const newnote = {...note, title, details, date}
  const newnotes = notes.map(item => {
    if (item.id === id) {
      item = newnote;
    }
    return item;
  })
  setNotes(newnotes)
  navigate('/')
 }

  }

  const handledelet =()=>{
    const newnotes = notes.filter(item => item.id !== id)
    setNotes(newnotes)
    navigate('/')
  }




  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <FaAngleLeft />
        </Link>
        <button onClick={handleform} className="btn lg primary">save</button>
        <button onClick={handledelet} className="btn danger"><FaRegTrashAlt /></button>
      </header>
      <form onSubmit={handleform} className="create-note__form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows="28" placeholder="Note details.." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
};

export default Editnotes;
