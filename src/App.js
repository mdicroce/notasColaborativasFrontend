import React, { useState, useEffect } from 'react'
import './App.css';
import Notes from './components/noteView'


const notasAuxiliares = 
    {
        "title" : "Revisar la vista de notas",
        "content": "Las vistas de notas tienen que poder visualizarse de forma correcta",
        "room" : {
            owner: {

            },
            users:{

            },
            notes: {

            }
        },
        "responsable" : {
                "username" : "mbexel",
                "mail" : "mtt1pt@gmail.com"
        },
        "owner" : {
                "username" : "mbexel",
                "mail" : "mtt1pt@gmail.com"
        },
        "complete" : false,
        "date": new Date().toISOString(),
        "moreNotes":[]
    }

function App() {
  const {viewToShow, setViewToShow} = useState('frontPage')
  console.log(notasAuxiliares.moreNotes.length)
  return (
    <div>
      <Notes notes={notasAuxiliares}/>
    </div>
    )
}

export default App;
