import React from 'react'
import './App.css'
import FrontPage from './components/frontpage'
import { useInitialUser } from './hooks/useInitialUser'


function App() {

  useInitialUser()
  
    return (
    <div>
      <FrontPage/>  
    </div>
    )
}
export default App;
