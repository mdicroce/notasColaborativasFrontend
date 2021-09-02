import React,  { useState, useEffect } from 'react'
import { useRoom } from '../hooks/useRoom'
import Container  from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { TableContainer } from '@material-ui/core'
import { Table } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'
import { useStyles } from '../components/frontpage'
import { NewRoom } from '../components/newRoom'
import { FocusRoomView } from './roomFocus'
import { DataContext } from '../context/contextProvider'

export const Room = () => {
    const { postNewRoom, rooms, getRoomsFromUser } = useRoom()
    return (<Container>
        <NewRoom postNewRoom={postNewRoom}/>
        <SeeRooms rooms={rooms} getRoomsFromUser={getRoomsFromUser}/>
        </Container>
    )
}

const SeeRooms = ({rooms, getRoomsFromUser}) => {
    const [ roomRow, setRoomRow ] = useState([])
    useEffect(()=>{
        getRoomsFromUser()
    }, [])
    useEffect(()=>{
        setRoomRow(rooms.map((room)=>{
            
            return ( <RoomList key={room._id} id={room._id} roomName={room.roomName} owner={room.owner.username} cuantityOfUsers={room.users.length} cuantityOfNotes={room.notes.length}/> )
        }))
    },[rooms])
    return (
        <Container style={{backgroundColor:"blue"}}>
            <TableContainer component={Paper} style={{width: "85%", margin: "0 auto"}}>
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
        </Container>
    )
}

const RoomList = ({id, roomName, owner, cuantityOfUsers, cuantityOfNotes}) => {
    const classes = useStyles()
    const { setView } = React.useContext(DataContext)
    const onClick = (e) => {
        e.preventDefault()
        setView(<FocusRoomView id={id} owner={owner} />)
    }
    return(
        <TableRow className={classes.roomTable} onClick={onClick}>
            <TableCell>{roomName}</TableCell>
            <TableCell> { owner } </TableCell>
            <TableCell> { cuantityOfUsers } </TableCell>
            <TableCell> { cuantityOfNotes } </TableCell>
        </TableRow>
    )
}