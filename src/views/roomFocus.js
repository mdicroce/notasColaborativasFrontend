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

export const FocusRoomView = ({id, owner}) => {
    const { room, getRoom } = useRoom()
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
    
    return(
        <Container>
            <Button onClick={((e)=>{e.preventDefault();setView(<NotesPage/>);})}>fafa</Button>
            {seeForm ? <AddNewUserToRoom room={room} /> : ""}
            {seeForm ? <ShowUsers users={ roomUsers } /> : ""}
        </Container>
    )
}

const AddNewUserToRoom = ({room}) => {
    
    const classes = useStyles()
    const { postNewUserToRoom } = useRoom()
    const [searchForm, setSearchForm] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([])
    const {getUser} = useUser()
    const onSubmit = (e) => {
        e.preventDefault()
        postNewUserToRoom(room.id, inputValue)
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
                <Container maxWidth="sm">
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
        <Container>
            <Grid container>
                {usersToShow}
            </Grid>
        </Container>
    )
}

const ShowOneUser = ({user}) => {
    return(
        <Grid item sm="12" xl="3">
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