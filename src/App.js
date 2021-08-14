import React, { useState, useEffect } from 'react'
import { DataContext } from './context/contextProvider'
import './App.css'
import FrontPage from './components/frontpage'


function App() {

  const { setUser } = React.useContext(DataContext)
  useEffect(()=>{
    setUser(window.localStorage.getItem('loggedUser'))
  }, [])
  
    return (
    <div>
      <FrontPage/>  
    </div>
    )
}
export default App;
