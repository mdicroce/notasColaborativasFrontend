import React from 'react'
import { useRoom } from '../hooks/useRoom'
import { Container, Grid, Paper, List, ListItem, ListItemText, Divider, TextField, Button, Typography } from '@material-ui/core'
import { DataContext } from '../context/contextProvider'
import { useUser } from '../services/users'
import { NotesPage } from '../views/userView'
import { Autocomplete } from '@material-ui/lab'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { AddCircle } from '@material-ui/icons'
import { useStyles } from '../components/frontpage'
import { ShowForm } from '../components/newNote'

export const FocusRoomView = ({id, owner}) => {
    const { rooms, getRoom, postNewUserToRoom} = useRoom()
    const { user } = React.useContext(DataContext)
    const { setView } = React.useContext(DataContext)
    const [ seeForm, setSeeForm ] = React.useState(false)
    const [ roomUsers, setRoomUsers ] = React.useState([])
    React.useEffect(()=>{
        getRoom(id)
        .then(response => {
            setRoomUsers(response[0].users)
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
        <Container>
            {seeForm ? <AddNewUserToRoom room={rooms[0]} postNewUserToRoom={postNewUserToRoom} /> : ""}
            {seeForm ? <ShowUsers users={ roomUsers } /> : ""}
        </Container>
    )
}

const AddNewUserToRoom = ({room, postNewUserToRoom}) => {
    
    const classes = useStyles()
    const [searchForm, setSearchForm] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([])
    const {getUser} = useUser()
    const onSubmit = (e) => {
        e.preventDefault()
        postNewUserToRoom(room._id, inputValue)
    }
    const onChangeField = async (e, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setSearchForm(e.target.value)
    }
    React.useEffect(() => {
        getUser(inputValue)
        .then(results => {
            let newOptions = []
            if(inputValue)
            {
                
            }
            if(results)
            {
                newOptions = [...newOptions, ...results.map(actualResult => actualResult.username)]
            }
            
            setOptions(newOptions)
        })

    }, [searchForm, inputValue, getUser])
    
        return (
            <div>
                <Container style={{ padding: "2rem 0 1rem 0" }}  maxWidth="sm">
                    <Paper style={{padding: "1rem"}}>
                        <form onSubmit={onSubmit}>
                            <Grid  container alignItems="center">
                                <Grid item xs>
                                    <Autocomplete 
                                    options={options} 
                                    value={inputValue} 
                                    includeInputInList
                                    onInputChange = { (e, newInputValue) => {setInputValue(newInputValue)} }
                                    getOptionLabel={(option) => option} 
                                    onChange={onChangeField}  
                                    fullWidth
                                    renderInput={(params) => <TextField size="small" {...params} variant="standard"/> } 
                                    renderOption={(option) => {
                                        console.info(option)
                                        return (
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <AccountCircleIcon/>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography variant="body" color="textPrimary">
                                                        {option}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button fullWidth color="primary" type="submit" variant="text" className={classes.button} startIcon={<AddCircle />} size="medium">Add</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </div>
        )
}

const ShowUsers = ({users}) => {
    const [usersToShow, setUsersToShow] = React.useState([])
    
    React.useEffect(()=>{
        
        setUsersToShow(users.map(
            (actualUser)=>{
                return (<ShowOneUser key={actualUser.id} user={actualUser}/>)
            }))
    },[users])
    return(
        <Container style={{padding: "1rem 0"}}>
            <ShowForm text="Show Users">
                <Paper style={{ padding: "1rem" }}  variant="outlined">

                    <Typography variant="h2">
                        Users
                    </Typography>
                    <Grid container spacing={3}>
                        {usersToShow}
                    </Grid>
                </Paper>
            </ShowForm>
        </Container>
    )
}

const ShowOneUser = ({user}) => {
    return(
        <Grid item sm={12}  md={4} lg={3}>
            <Paper>
                <List>
                    <ListItem>
                        <ListItemText primary={user.username} secondary="username"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary={user.email} secondary="email"/>
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    )
}