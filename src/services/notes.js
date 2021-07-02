import axios from 'axios'
import exportedToken from './token'
const baseUrl = 'http://localhost:3001/api/notes'


let config = exportedToken.config

const getAllFromUser = async(id) => {
    const response = await axios.get(`${baseUrl}/user/${id}`,config)
    return response.data
}

const getNote = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
}

const postNote = async(newObject) => {
    const response = await axios.post(`${baseUrl}`,newObject, config)
    return response.data
}

const commentNote = async(id, newObject) => {
    const response = await axios.put(`${baseUrl}/comment/${id}`, newObject, config)
    return response.data
}

const deleteNote = async(id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

const changeNote = async(id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}
const exportedObjedt = {  getAllFromUser, getNote, postNote, commentNote, deleteNote, changeNote }
export default exportedObjedt