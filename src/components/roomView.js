import React,  { useState, useEffect } from 'react'
import roomServices from '../services/rooms'
import userServices from '../services/users'
import Container  from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { IconButton } from '@material-ui/core'
import { useField } from '../hooks/useField'
import { AddCircle } from '@material-ui/icons'

const Room = (props) => {
    <Container>
        <NewRoom/>

        
    </Container>
}

const NewRoom = () =>
{
    const onSubmitRoom = (e) => {
        e.preventDefault()
        
    }
    const {roomName} = useField({type: 'text'})
    return (
        <Container>
            <Paper>
                <form onSubmit={}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        {...roomName}
                        required
                        fullWidth
                        id='roomName'
                        label='Rooms Name'
                        name='roomName'
                    />
                    <IconButton aria-label="delete" type="submit">
                        <AddCircle aria-label="Add Room" />
                    </IconButton>
                </form>
            </Paper>
        </Container>
    )
}

const AddUser = ({}) => {
    const [showForm, setShowForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [usersToAdd = setUsersToAdd] = useState('')
    const onFormSubmit = (e)=>{
        e.preventDefault()
        const allUsers = userServices.getUser(inputValue)
        .then(response => {
            return response
        })
    }
    if(showForm)
    {
        return(
            <div>
                <form onSubmit={onFormSubmit}>
                    <label>Use the EMail or the Username to add a new User</label>
                    <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                    <button type="submit">Search User</button>
                </form>
            </div>
        )
    }
}
const ShowUsers = ({owner, users}) => {
    const mappedUsers = users.map(actual => <ShowActualUser key={users.id} username = {actual.username} email = {actual.email} />)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowActualUser username ={owner.username} email= {owner.email} />
                    {mappedUsers}
                </tbody>
            </table>
        </div>
    )
}

const ShowActualUser = ({username, email}) => {
    return (
    <tr>
        <th>
            {username}
        </th>
        <th> 
            {email} 
        </th>
    </tr>
    )
}