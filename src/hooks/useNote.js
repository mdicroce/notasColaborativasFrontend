import {useState, useContext} from 'react'
import { DataContext } from '../context/contextProvider'
import { useNoteService } from '../services/notes'


export default function useNote () {
    const {user} = useContext(DataContext)
    const noteService = useNoteService()
    const [notes, setNotes] = useState([])
    const postNewNote = (newNote) => {
        noteService.postNote(newNote)
    }
    const getNotesFromUser = async () => {
        const response = await noteService.getAllFromUser(user.username)
        setNotes(response)
    }
    const deleteNote = async (id) => {
        noteService.deleteNote(id)
        const response = await noteService.getAllFromUser(user.username)
        setNotes(response)
    }
    const changeNote = async(id,newObject) => {
        noteService.changeNote(id,newObject)
        setNotes(notes.map((actual)=>{
            if(actual.id === id)
            {
                return newObject
            }
            else
            {
                return actual
            }
        }))
    }
    const commentNote = async(id,newObject) => {
        await noteService.commentNote(id,newObject)
        setNotes(notes.map((actual)=>{
            if(actual.id === id)
            {
                return newObject
            }
            else
            {
                return actual
            }
        }))
    }
    return { notes, postNewNote, getNotesFromUser, deleteNote, changeNote, commentNote}
}