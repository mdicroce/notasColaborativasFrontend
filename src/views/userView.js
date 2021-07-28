import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Fab, Tooltip,Toolbar, IconButton, Paper, Button,Menu, MenuList} from '@material-ui/core'
import {Menu as MenuIcon, Delete as DeleteIcon, Add as AddIcon} from '@material-ui/icons'
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import Login from './loginView'
import Register from './registerView';
import NoteService from '../services/notes'


const LoggedFrontPage = (props) => {

    const [viewToShow, setViewToShow] =useState()
    useEffect(()=>{setViewToShow(<NotesPage loggedUser={props.loggedUser} useStyles={props.useStyles} setViewToShow={setViewToShow} setLoggedUser={props.setLoggedUser}/>)},[])

    return (
        <div>
            {viewToShow}
        </div>
    )
}

const NotesPage = (props) => {
    
    return (
        <div>
            <LoggedHeader classes={props.useStyles()} setViewToShow={props.setViewToShow}/>
            <Notes classes={props.useStyles()} loggedUser={props.loggedUser} setViewToShow={props.setViewToShow} setLoggedUser={props.setLoggedUser}/>
        </div>
    )
}

const Notes = (props) => {
    
    const [notes,setNotes]=useState([])
    useEffect(()=>{
        console.log(props.loggedUser)
        setNotes(NoteService.getAllFromUser(props.loggedUser.username)
        .then(response => response))
    },[])
    const noteToShow = notes.map((n)=>{

    })
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
const UnloggedFrontPageMain = (props) => {
    const classes = props.classes
    const logIn = (e) => {
        e.preventDefault()
        props.setViewToShow(<Login setLoggedUser={props.setLoggedUser} userToLogin={{}}/>)
    }
    const register = (e) => {
        e.preventDefault()
        props.setViewToShow(<Register setViewToShow={props.setViewToShow}/>)
    }
    return(
        <div>
            <Container className={classes.centerInfo} fixed>
                <Container className={classes.centerInfo}>
                      <Typography style={{marginTop: '30px', fontWeight: 'bold'}} color='textPrimary' variant='h3'>
                          Login and Start Using Noted
                      </Typography>
                      <img className={classes.imgFrontPage} src={loginSvg} alt=""/>
                      <Container className={classes.centerInfo}>
                        <Button size='large' variant='contained' color='primary' className={classes.loginButtons} onClick={logIn}>Please Login</Button>
                        <Typography className={classes.buttonsSubtitle} variant="caption" color='textSecondary'>If you already have an account</Typography>
                      </Container>
                      <Container className={classes.centerInfo}>
                        <Button size='large' variant='contained' color='secondary' className={classes.loginButtons} onClick={register}>Register</Button>
                        <Typography className={classes.buttonsSubtitle} variant="caption" color='textSecondary'>If it's your first time</Typography>
                      </Container>
                </Container>
            </Container>
        </div>
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