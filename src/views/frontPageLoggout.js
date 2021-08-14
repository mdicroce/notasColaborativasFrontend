import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Toolbar, IconButton, Button,Menu, MenuList} from '@material-ui/core'
import {Menu as MenuIcon} from '@material-ui/icons'
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import Login from './loginView'
import Register from './registerView'
import { DataContext } from '../context/contextProvider';


const UnloggedFrontPage = (props) => {

    const { view, setView } = React.useContext(DataContext)
    useEffect(()=>{setView(<UnloggedFrontPageA useStyles={props.useStyles} setViewToShow={setViewToShow} setLoggedUser={props.setLoggedUser}/>)},[])

    return (
        <div>
            {view}
        </div>
    )
}

const UnloggedFrontPageA = (props) => {
    
    return (
        <div>
            <UnloggedFrontPageHeader classes={props.useStyles()} setViewToShow={props.setViewToShow} setLoggedUser={props.setLoggedUser}/>
            <UnloggedFrontPageMain classes={props.useStyles()} setViewToShow={props.setViewToShow} setLoggedUser={props.setLoggedUser}/>
        </div>
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

const UnloggedFrontPageHeader = ({classes, setViewToShow, setLoggedUser}) => {
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
                    <img className={classes.pngLogo} src={logoPng} alt=''/>
                    <Typography variant="h6" className={classes.title}>
                        Noted
                    </Typography>
                    <Button color="inherit" onClick={(e)=>{
                        e.preventDefault()
                        setViewToShow(<Login setLoggedUser={setLoggedUser} userToLogin={{}}/>)
                    }}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default UnloggedFrontPage