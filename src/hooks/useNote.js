import {useState, useEffect} from 'react'

export default function useNote (fullNotas) {
    const [notas, setNotas ] = useState({fullNotas})
    const [moreNotes, setMoreNotes] = useState({})

    useEffect(()=>{
        const letNotes = {...notas}
        
    },[moreNote])
}