import axios from 'axios'
import exportedToken from './token'
const baseUrl = 'http://localhost:3001/api/rooms'

let config = exportedToken.config


const getRoom = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
}

const postRoom = async(newObject) => {
    const response = await axios.post(`${baseUrl}`,newObject, config)
    return response.data
}

const changeRoom = async(id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

const deleteRoom = async(id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}


const exportedObjedt = { getRoom, postRoom, changeRoom, deleteRoom }
export default exportedObjedt