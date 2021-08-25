import React,  { useEffect} from 'react'
import { Container, AppBar, Typography,Toolbar, Paper, Button, Box} from '@material-ui/core'

import logoPng from '../imgs/logopng.png'

import { DataContext } from '../context/contextProvider'

import { NotesTable } from './showNotes'
import { useStyles } from '../components/frontpage'



const LoggedFrontPage = (props) => {

    const { view, setView } = React.useContext(DataContext)
    useEffect(()=>{setView(<NotesPage useStyles={props.useStyles}/>)},[])

    return (
        <div >
            {view}
        </div>
    )
}

const NotesPage = (props) => {
    
    return (
        <div>
            <LoggedHeader classes={props.useStyles()} />
            <MainPage classes= {props.useStyles()}>
                <NotesTable classes={props.useStyles()} />
            </MainPage>
        </div>
    )
}

const MainPage = (props) => 
{
    const classes = useStyles()
    return (
        <Container className={classes.centerInfo} color="background">
                
            {props.children}
                
        </Container>
    )
}


/* const Notes = (props) => {
    
    const {notes, getNotesFromUser} = useNote()
    const { user } = React.useContext(DataContext)
    const notesToShow = notes.map((actualNote) => {
        return (<ShowNote key={actualNote.id} note={actualNote}/>)
    })
    useEffect(()=> {
        getNotesFromUser(user.username)
        
    },[]) 
    return(
        <div>
            {notesToShow}
        </div>
    )
} */
const ShowNote = (props) => {
    return (
        <Container>
            <Paper>
                {/* <Tooltip title="Delete">
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
                    </Tooltip> */}
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