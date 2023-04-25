import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Editnotes = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <FaAngleLeft />
        </Link>
        <button className="btn lg primary">save</button>
        <button className="btn danger">Delete</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" />
        <textarea rows="28" placeholder="Note details.."></textarea>
      </form>
    </section>
  );
};

export default Editnotes;
