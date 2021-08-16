import React,  { useEffect} from 'react'
import { Container, AppBar, Typography, Toolbar, Button} from '@material-ui/core'
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import { SignIn } from './loginView'
import Register from './registerView'
import { DataContext } from '../context/contextProvider';


const UnloggedFrontPage = (props) => {

    const { view, setView } = React.useContext(DataContext)
    useEffect(()=>{setView(<UnloggedFrontPageA useStyles={props.useStyles} />)},[])

    return (
        <div>
            {view}
        </div>
    )
}

const UnloggedFrontPageA = (props) => {
    
    return (
        <div>
            <UnloggedFrontPageHeader classes={props.useStyles()}/>
            <UnloggedFrontPageMain classes={props.useStyles()}/>
        </div>
    )
}
const UnloggedFrontPageMain = (props) => {
    const classes = props.classes
    const { setView } = React.useContext(DataContext)
    const logIn = (e) => {
        e.preventDefault()
        setView(<SignIn />)
    }
    const register = (e) => {
        e.preventDefault()
        setView(<Register />)
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
    const {setView} = React.useContext(DataContext)
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
                        setView(<SignIn />)
                    }}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default UnloggedFrontPage