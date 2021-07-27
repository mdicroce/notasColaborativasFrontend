import React, { useState, useEffect } from 'react'
import './App.css'
import FrontPage from './components/frontpage'


function App() {
  const[loggedUser,setLoggedUser] = useState('')
  
    return (
    <div>
      <FrontPage loggedUser={loggedUser} setLoggedUser={setLoggedUser}  />  
    </div>
    )
}
export default App;
