import React,  { useState, useEffect } from 'react'
import { useRoom } from '../hooks/useRoom'
import Container  from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { IconButton } from '@material-ui/core'
import { useField } from '../hooks/useField'
import { AddCircle } from '@material-ui/icons'
import { TableContainer } from '@material-ui/core'
import { Table } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'

export const Room = () => {
    const { postNewRoom, rooms, getRoomsFromUser } = useRoom()
    return (<Container>
        <NewRoom postNewRoom={postNewRoom}/>
        <SeeRooms rooms={rooms} getRoomsFromUser={getRoomsFromUser}/>
        </Container>
    )
}

const NewRoom = ({ postNewRoom }) =>
{
    const { roomName } = useField({type: 'text'})
    const { password } = useField({type: 'password'})
    const onSubmitRoom = (e) => {
        e.preventDefault()
        postNewRoom({roomName: roomName.value, password: password.value})
        roomName.resetValue()
        password.resetValue()
    }
    return (
        <Container>
            <Paper>
                <form onSubmit={onSubmitRoom}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        {...roomName}
                        required
                        fullWidth
                        label='Rooms Name'
                        name='roomName'
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        {...password}
                        fullWidth
                        label='Room Pass'
                        name='password'
                    />
                    <IconButton aria-label="delete" type="submit">
                        <AddCircle aria-label="Add Room" />
                    </IconButton>
                </form>
            </Paper>
        </Container>
    )
}

const SeeRooms = ({rooms, getRoomsFromUser}) => {
    const [ roomRow, setRoomRow ] = useState([])
    useEffect(()=>{
        getRoomsFromUser()
    }, [getRoomsFromUser])
    useEffect(()=>{
        setRoomRow(rooms.map((room)=>{
            return ( <RoomList roomName={room.roomName} owner={room.owner.username} cuantityOfUsers={room.users.length} cuantityOfNotes={room.notes.length}/> )
        }))
    },[rooms])
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Room Name</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Users</TableCell>
                        <TableCell>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roomRow}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const RoomList = ({roomName, owner, cuantityOfUsers, cuantityOfNotes}) => {
    return(
        <TableRow>
            <TableCell>{roomName}</TableCell>
            <TableCell> { owner } </TableCell>
            <TableCell> { cuantityOfUsers } </TableCell>
            <TableCell> { cuantityOfNotes } </TableCell>
        </TableRow>
    )
}