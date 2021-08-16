import axios from 'axios'
import React from 'react'
import { DataProvider } from '../context/contextProvider'
const baseUrl = 'http://localhost:3001/api/notes'

export const useNoteService = () => {
    const { token } = React.useContext(DataProvider)

    const getAllFromUser = async(username) => {
        const response = await axios.get(`${baseUrl}/user/${username}`,token)
        return response.data
    }

    const getNote = async (id) => {
        const response = await axios.get(`${baseUrl}/${id}`, token)
        return response.data
    }

    const postNote = async(newObject) => {
        const response = await axios.post(`${baseUrl}`,newObject, token)
        return response.data
    }

    const commentNote = async(id, newObject) => {
        const response = await axios.put(`${baseUrl}/comment/${id}`, newObject, token)
        return response.data
    }

    const deleteNote = async(id) => {
        const response = await axios.delete(`${baseUrl}/${id}`, token)
        return response.data
    }

    const changeNote = async(id, newObject) => {
        const response = await axios.put(`${baseUrl}/${id}`, newObject, token)
        return response.data
    }

return { getAllFromUser, getNote, postNote, commentNote, deleteNote, changeNote }
}
