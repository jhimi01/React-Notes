import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import useCreateDate from "../component/useCreateDate";

const CreateNotes = ({setNotes}) => {

    const [title, setTitles] = useState('')
    const [details, setDetails] = useState('')
    const date = useCreateDate();
    const navigate  = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();

        if (title && details) {
         const note = { id: uuid(), title, details, date}
         setNotes(prevNote => [note, ...prevNote])
        //  console.log(note)
        navigate('/')
        }
    }



  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <FaAngleLeft />
        </Link>
        <button onClick={handlesubmit} className="btn lg primary">save</button>
      
      </header>
      <form className="create-note__form" onSubmit={handlesubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=> setTitles(e.target.value)} autoFocus/>
        <textarea rows="28" placeholder="Note details.." value={details}  onChange={(e)=> setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
};

export default CreateNotes;
