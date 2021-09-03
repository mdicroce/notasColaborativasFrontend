import React from 'react'
import { useRoom } from '../hooks/useRoom'
import { Container, Paper, Typography } from '@material-ui/core'
import { DataContext } from '../context/contextProvider'
import { AddNewUserToRoom } from '../components/AddNewUserToRoom'
import { ShowUsers } from '../components/ShowUsers'
import { NotesTable } from '../components/showNotes'
import { ShowForm } from '../components/newNote'

export const FocusRoomView = ({id, owner}) => {
    const { rooms, getRoom, postNewUserToRoom} = useRoom()
    const { user } = React.useContext(DataContext)
    const { setView } = React.useContext(DataContext)
    const [ seeForm, setSeeForm ] = React.useState(false)
    const [ roomUsers, setRoomUsers ] = React.useState([])
    const [roomId, setRoomId] = React.useState("")
    
    React.useEffect(()=>{
        getRoom(id)
        .then(response => {
            setRoomUsers(response[0].users)
            setRoomId(response[0]._id)
        })
        setSeeForm(owner === user.username)
    },[getRoom, id, setSeeForm, owner, user])
    React.useEffect(()=>{
        if(rooms.users)
        {
            setRoomUsers(rooms.users)
            console.log(rooms)
        }
    },[rooms.users])
    return(
        <div>
            <Container>
                {seeForm ? <AddNewUserToRoom room={rooms[0]} postNewUserToRoom={postNewUserToRoom} /> : ""}
                {seeForm ? <ShowUsers users={ roomUsers } /> : ""}
            </Container>
            <Container style={{padding: "1rem, 0"}}>
            <ShowForm text="Show Notes">
                <Paper style={{ padding: "1rem" }}  variant="outlined">
                    <Typography variant="h2">
                        Notes
                    </Typography>
                    {roomId ? <NotesTable room={roomId}/>:""}
                </Paper>
            </ShowForm>
            </Container>
        </div>
    )
}