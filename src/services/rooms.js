import axios from 'axios'
import { useContext } from 'react'
import { DataContext } from '../context/contextProvider'

const baseUrl = 'http://localhost:3001/api/rooms'

export const useRoomService = () => {
    const { token } = useContext(DataContext)
    const config = {
        headers: {Authorization: token},
    }

    const getRoom = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
}
    const getRoomsFromUser = async() => {
        const response = await axios.get(`${baseUrl}/`,config)
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
return {getRoom, getRoomsFromUser, postRoom, changeRoom, deleteRoom}
}


