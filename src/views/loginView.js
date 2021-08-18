import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Avatar, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useLogin } from '../hooks/useLogin';
import loginSvg from '../imgs/login.svg'
import logoPng from '../imgs/logopng.png'
import { useStyles } from '../components/frontpage';

export const SignIn = () => {
    const classes = useStyles()
    const { username, password, rememberMe, onSubmitLogin } = useLogin()

    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={onSubmitLogin} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        {...username}
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='username'
                        autoFocus
                    />
                    
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='pasword'
                        label='Password'
                        {...password}
                        autoComplete='current-password'
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                        {...rememberMe}
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

