import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from './loginView';
import RegisterService from '../services/users'


const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={props.onChangeUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={props.onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={props.onChangePassword}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link onClick={props.alreadyHaveAnAccount} href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const Register = (props) => {
    
    const alreadyHaveAnAccount = (e) => {
        e.preventDefault()
        props.setViewToShow(<Login setLoggedUser={props.setLoggedUser} userToLogin={{}}/>)
    }
    const onChangeUsername = (e)  => {
        setToSub({...toSub, username:e.target.value})
    }
    const onChangePassword = (e) => {
        setToSub({...toSub, password : e.target.value})
    }
    const onChangeEmail = (e) => {
        setToSub({...toSub, email: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const respuesta =  RegisterService.postNewUser(toSub)
        props.setViewToShow(<Login setLoggedUser={props.setLoggedUser} userToLogin={respuesta}/>)
        
    }
    const [toSub, setToSub] = React.useState({'username':'','email':'', 'password': ''})
    return (
        <div>
            <SignUp alreadyHaveAnAccount={alreadyHaveAnAccount} onChangeUsername={onChangeUsername} onChangePassword={onChangePassword} onChangeEmail={onChangeEmail} onSubmit={onSubmit} />
        </div>
    )
}

export default Register