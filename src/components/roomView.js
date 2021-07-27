import React,  { useState, useEffect } from 'react'
import roomServices from '../services/rooms'
import userServices from '../services/users'

const Room = (props) => {
    
    const [room, setRoom] = useState({})
    useEffect(()=>{
        roomServices.getRoom(props.roomId)
        .then(response => {
            setRoom(response)
        })
    },[props.roomId])

    
    useEffect(() => {roomServices.changeRoom()}, [room])

    
}

const ShowNotes = ({notes}) => {
    const mappedNotes = notes.map(actual => <ShowActualNote title={actual.title} owner={actual.owner} completed={actual.complete} date={actual.date} />)
    return (
        <div>
            {mappedNotes}
        </div>
    )
}

const ShowActualNote = ({title, owner, completed, date}) =>
{
    return (
        <div onClick={()=>{}}>
            <span>{title}</span>
            <span>{owner}</span>
            <span> {date} </span>
        </div>
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
                    <label>Use the Mail or the Username to add a new User</label>
                    <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                    <button type="submit">Search User</button>
                </form>
            </div>
        )
    }
}
const ShowUsers = ({owner, users}) => {
    const mappedUsers = users.map(actual => <ShowActualUser key={users.id} username = {actual.username} mail = {actual.mail} />)
    
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
                    <ShowActualUser username ={owner.username} mail= {owner.mail} />
                    {mappedUsers}
                </tbody>
            </table>
        </div>
    )
}

const ShowActualUser = ({username, mail}) => {
    return (
    <tr>
        <th>
            {username}
        </th>
        <th> 
            {mail} 
        </th>
    </tr>
    )
}