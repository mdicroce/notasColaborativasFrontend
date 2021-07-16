import React, { useState, useEffect } from 'react'
import './App.css';
import Notes from './components/noteView'
import notasAuxiliares from './notasAuxiliares';

function App() {
  const [viewToShow, setViewToShow] = useState(notasAuxiliares)
  useEffect(() => {
    console.log(viewToShow)
  }, [viewToShow])
  
  return (
    <div>
      <Notes fullNote = {viewToShow} setFullNote={setViewToShow}/>      
    </div>
    )
}

export default App;
