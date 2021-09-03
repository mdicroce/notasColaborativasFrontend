import {useState, useMemo} from 'react'
import { useRoomService } from '../services/rooms'


export function useRoom () {
    const { changeRoomService, deleteRoomService, getRoomService, getRoomsFromUserService, postRoomService } = useRoomService()
    const [rooms, setRooms] = useState([])

    const postNewUserToRoom = useMemo(()=> async(id,newUser)=>{
        const response = await changeRoomService(id, {"username": newUser})
        return await setRooms({...rooms, users: response[0].users})
        
    },[changeRoomService, rooms])

    const postNewRoom = useMemo(() => async (newRoom) => {
        postRoomService(newRoom)
        setRooms([...rooms,newRoom])
        
    },[postRoomService, rooms])

    const getRoomsFromUser = async() => {
        const response = await getRoomsFromUserService()
        setRooms(response)
    }
    const getRoom = useMemo(() => async (id) => {
        const response = await getRoomService(id)
        setRooms(response)
        return response
    },[getRoomService])
    const deleteRoom = async (id) => {
        deleteRoomService(id)
        const response = await getRoomsFromUser()
        setRooms(response)
    }
    const changeNote = async(id,newObject) => {
        changeRoomService(id,newObject)
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

    return { rooms, postNewRoom, getRoomsFromUser, getRoom, deleteRoom, changeNote,postNewUserToRoom}
}
