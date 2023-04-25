import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNotes from './pages/CreateNotes';
import Editnotes from './pages/Editnotes';
// import dummynotes from './dummy_notes';

const App = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    console.log(notes)

    useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    return (
       <main id='app'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Notes  notes={notes} />}/>
            <Route path='/creat-notes' element={<CreateNotes setNotes={setNotes}/>}/>
            <Route path='/edit-note/:id' element= {<Editnotes />} />
        </Routes>
       </BrowserRouter>
       </main>
    );
};

export default App;