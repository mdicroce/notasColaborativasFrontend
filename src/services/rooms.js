import axios from 'axios'
import { useContext, useMemo } from 'react'
import { DataContext } from '../context/contextProvider'

const baseUrl = 'http://localhost:3001/api/rooms'

export const useRoomService = () => {
    const { token } = useContext(DataContext)
    const config = useMemo(() => {return{
        headers: {Authorization: token}
    }},[token])

    const getRoomService = useMemo(() => async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
},[config])
    const getRoomsFromUserService = async() => {
        const response = await axios.get(`${baseUrl}/`,config)
        return response.data
    }

const postRoomService = async(newObject) => {
    const response = await axios.post(`${baseUrl}`,newObject, config)
    return response.data
}

const changeRoomService = async(id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

const deleteRoomService = async(id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}
return {getRoomService, getRoomsFromUserService, postRoomService, changeRoomService, deleteRoomService}
}


