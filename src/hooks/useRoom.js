import {useState} from 'react'
import { useRoomService } from '../services/rooms'


export function useNote () {
    const roomService = useRoomService()
    const [rooms, setRooms] = useState([])
    const postNewRoom = async (newRoom) => {
        roomService.postRoom(newRoom)
        setRooms([...rooms,newRoom])
    }
    const getRoomsFromUser = async() => {
        const response = await roomService.getRoomsFromUser()
        setRooms(response)
    }
    const getRoom = async (id) => {
        const response = await roomService.getRoom(id)
        setRooms(response)
    }
    const deleteRoom = async (id) => {
        roomService.deleteRoom(id)
        const response = await roomService.getRoomsFromUser()
        setRooms(response)
    }
    const changeNote = async(id,newObject) => {
        roomService.changeRoom(id,newObject)
        setRooms(rooms.map((actual)=>{
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

    return { rooms, postNewRoom, getRoomsFromUser, getRoom, deleteRoom, changeNote}
}