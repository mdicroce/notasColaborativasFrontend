import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Fab, Tooltip,Toolbar, IconButton, Paper, Button,Menu, MenuList} from '@material-ui/core'
import {Menu as MenuIcon, Delete as DeleteIcon, Add as AddIcon} from '@material-ui/icons'
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import { SignIn } from './loginView'
import Register from './registerView'
import { useNotes } from '../services/notes'
import { DataContext } from '../context/contextProvider'
import useNote from '../hooks/useNote'


const LoggedFrontPage = (props) => {

    const { viewToShow, setView } = React.useContext(DataContext)
    useEffect(()=>{setView(<NotesPage useStyles={props.useStyles}/>)},[])

    return (
        <div>
            {viewToShow}
        </div>
    )
}

const NotesPage = (props) => {
    
    return (
        <div>
            <LoggedHeader classes={props.useStyles()} />
            <Notes classes={props.useStyles()} />
        </div>
    )
}

const Notes = (props) => {
    
    const {notes, getNotesFromUser} = useNote()
    const { user } = React.useContext(DataContext)
    getNotesFromUser(user.username)
    return(
        ShowNote
    )
}
const ShowNote = (props) => {
    return (
        <Container>
            <Paper>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Add" aria-label="add">
                    <Fab color="primary" >
                        <AddIcon />
                    </Fab>
                    </Tooltip>
                    <Tooltip title="Add" aria-label="add">
                    <Fab color="secondary" >
                        <AddIcon />
                    </Fab>
                    </Tooltip>
            </Paper>
        </Container>
    )
}

const LoggedHeader = (props) => {
    const loggout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('loggedUser')
        props.setLoggedUser(null)
    }
    const classes = props.classes
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
                    <img className={classes.pngLogo} src={logoPng} alt=''/>
                    <Typography variant="h6" className={classes.title}>
                        Noted
                    </Typography>
                    <Button onClick={loggout} color="inherit">Notes</Button>
                    <Button color="inherit">Rooms</Button>
                    <Button color="inherit" >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default LoggedFrontPage