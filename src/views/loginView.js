import React,  {useState, useEffect} from 'react'
import LoginService from '../services/login'
import  Token  from '../services/token'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Avatar, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'

const useStyles = makeStyles ((theme) => ({
    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn = ({onChangeEmail, onChangePass, onChangeRememberMe, onSubmit}) => {
    const classes = useStyles()
    
    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={onSubmit} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Adress'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        onChange={onChangeEmail}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='pasword'
                        label='Password'
                        type='password'
                        name='password'
                        autoComplete='current-password'
                        onChange={onChangePass}
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                        onChange={onChangeRememberMe}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                {"Don't have an account? please register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

const Login = (props) => {
    const onChangeEmail = (e) => {
        setToSub({...toSub, 'email': e.target.value})
    }
    const onChangePass = (e) => {
        setToSub({...toSub, 'pass': e.target.value})
    }
    const onChangeRememberMe=(e)=>{
        setToSub({...toSub, 'rememberMe': e.target.value})
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        LoginService.login({username: toSub.email, password: toSub.pass})
        .then(response => {
            Token.setToken(response.token)
            props.setLoggedUser(response)
            if(toSub.rememberMe)
            {
                window.localStorage.setItem('loggedUser', JSON.stringify(response))
            }
        })
    }
    const [toSub, setToSub] = useState({'email':'', 'pass': '', 'rememberMe' : false})
    /* const [onChangeLogin, setOnChangeLogin] = useState('')
    const [onChangePass, setOnChangePass] = useState('')
    const onClickHandler = (e) => {
        e.preventDefault()
        LoginService.login({username: onChangeLogin, password: onChangePass})
        .then(response => {
            token.setToken(response.token)
            window.localStorage.setItem('loggedUser', JSON.stringify(response))
            
            console.log(response)
        })
        
    } */
    return(
        <div>
            <SignIn onChangeEmail={onChangeEmail} onChangePass={onChangePass} onChangeRememberMe={onChangeRememberMe} onSubmit={onSubmit}/>
        </div>
    )
}

export default Login