import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './components/login'

function App() {
  const {viewToShow, setViewToShow} = useState('frontPage')
  
  return (
    <div>
      <Login/>
      {window.localStorage.getItem('loggedUser')}
    </div>
    )
}

export default App;
