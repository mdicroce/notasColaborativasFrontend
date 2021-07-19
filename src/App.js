import React, { useState, useEffect } from 'react'
import './App.css';
import Notes from './components/noteView'
import notasAuxiliares from './notasAuxiliares';


const not = {
  title: "pepe",
  more: [
    {title: "pepe2"},{title:"pepe3"},{title:"pepe3"},{title:"pepe4"}
  ]
}
function App() {
  const [viewToShow, setViewToShow] = useState(not)
  useEffect(() => {
    console.log(viewToShow)
  }, [viewToShow])
  
  const roberto = not.more
  
  const showRoberto = not.more.map((actual)=> <p>{actual.title}</p>)
  const showR = roberto.map((a) => <Peps nota={a} roberto={roberto}/>)
  return (
    <div>
      {/* <Notes fullNote = {viewToShow} setFullNote={setViewToShow}/>       */}
      {showR}
      {showRoberto}
    </div>
    )
}

const Peps = ({nota, roberto}) => {
  if(roberto[1]== nota)
  nota.title = "gokuuu noooooo!"
  return (<p>{nota.title}</p>)
}
export default App;
