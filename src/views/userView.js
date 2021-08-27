import React,  { useEffect} from 'react'
import { Container, AppBar, Typography,Toolbar, Button} from '@material-ui/core'

import logoPng from '../imgs/logopng.png'

import { DataContext } from '../context/contextProvider'

import { NotesTable } from './showNotes'
import { useStyles } from '../components/frontpage'

import { Room } from '../components/roomView'



const LoggedFrontPage = () => {

    const { view, setView } = React.useContext(DataContext)
    useEffect(()=>{setView(<NotesPage/>)},[])

    return (
        <div >
            <LoggedHeader />
            {view}
        </div>
    )
}

const NotesPage = (props) => {
    
    return (
        <div>
            
            <MainPage>
                <NotesTable />
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

const LoggedHeader = (props) => {

    const { setUser, setView, setToken } = React.useContext(DataContext)
    const loggout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('loggedUser')
        setUser()
        setToken()
        setView()   
    }
    const showNotes = (e) => {
        e.preventDefault()
        setView(<NotesPage/>)
    }
    const showRooms = (e) => {
        e.preventDefault()
        setView(<Room/>)
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
                    <img className={classes.pngLogo} src={logoPng} alt=''/>
                    <Typography variant="h6" className={classes.title}>
                        Noted
                    </Typography>
                    <Button color="inherit" onClick={showNotes}>Notes</Button>
                    <Button color="inherit" onClick={showRooms}>Rooms</Button>
                    <Button color="inherit" onClick={loggout} >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default LoggedFrontPage