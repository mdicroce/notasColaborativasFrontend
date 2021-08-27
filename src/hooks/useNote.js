import {useState, useContext} from 'react'
import { DataContext } from '../context/contextProvider'
import { useNoteService } from '../services/notes'


export function useNote () {
    const {user} = useContext(DataContext)
    const noteService = useNoteService()
    const [notes, setNotes] = useState([])
    const postNewNote = async (newNote) => {
        noteService.postNote(newNote)
        setNotes([...notes,newNote])
    }
    const getNotesFromRoom = async() => {
        const response = await noteService.getAllFromRoom(user.personalRoom)
        setNotes(response)
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
    return { notes, postNewNote, getNotesFromUser, getNotesFromRoom, deleteNote, changeNote, commentNote}
}