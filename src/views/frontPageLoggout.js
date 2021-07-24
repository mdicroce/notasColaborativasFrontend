import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Toolbar, IconButton, Button,Menu, MenuList} from '@material-ui/core'
import {Menu as MenuIcon} from '@material-ui/icons'
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import Login from ''
import Register from '*.module.scss'

const UnloggedFrontPage = (props) => {

    const [viewToShow, setViewToShow] =useState()
    useEffect(()=>{setViewToShow(<UnloggedFrontPageA useStyles={props.useStyles} setViewToShow={setViewToShow} />)},[])

    return (
        <div>
            {viewToShow}
        </div>
    )
}

const UnloggedFrontPageA = (props) => {
    
    return (
        <div>
            <UnloggedFrontPageHeader classes={props.useStyles()} setViewToShow={props.setViewToShow}/>
            <UnloggedFrontPageMain classes={props.useStyles()} setViewToShow={props.setViewToShow}/>
        </div>
    )
}
const UnloggedFrontPageMain = (props) => {
    const classes = props.classes
    const logIn = (e) => {
        e.preventDefault()
        props.setViewToShow()
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
                        <Button size='large' variant='contained' color='primary' className={classes.loginButtons} onClick={}>Please Login</Button>
                        <Typography className={classes.buttonsSubtitle} variant="caption" color='textSecondary'>If you already have an account</Typography>
                      </Container>
                      <Container className={classes.centerInfo}>
                        <Button size='large' variant='contained' color='secondary' className={classes.loginButtons} onClick={}>Register</Button>
                        <Typography className={classes.buttonsSubtitle} variant="caption" color='textSecondary'>If it's your first time</Typography>
                      </Container>
                </Container>
            </Container>
        </div>
    )
}

const UnloggedFrontPageHeader = ({classes}) => {
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
                    <img className={classes.pngLogo} src={logoPng} alt=''/>
                    <Typography variant="h6" className={classes.title}>
                        Noted
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default UnloggedFrontPage