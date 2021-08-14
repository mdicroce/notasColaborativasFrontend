import React,  {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Typography, Toolbar, IconButton, Button,Menu, MenuList} from '@material-ui/core'
import UnloggedFrontPage from '../views/frontPageLoggout';
import LoggedFrontPage from '../views/userView';
import { DataContext } from '../context/contextProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textShadow: '2px 2px 1px #444'
  },
  centerInfo: {
      margin: '0 auto',
      textAlign: 'center',
      display : 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      alignContent: 'center',
      alignItems: 'center'
      
  },
  loginButtons: {
      width: '50%',
      minWidth: '200px',
      marginTop: '10px'
  },
  imgFrontPage:{
    height: '60vh',
    width: '70%'
  },
  pngLogo:{
      width: '32px',
      boxShadow: '2px 2px 3px #002884',
      marginRight: theme.spacing(2),
  },
  buttonsSubtitle:{
    fontSize: '14px',
    margin:'5px'
  }
}));

const FrontPage = () => {
  const { user } = React.useContext(DataContext)
    if(user)
    {
        return (
          <div>
            <LoggedFrontPage useStyles={useStyles} />
          </div>
        )
    }
    else
    {
        return (
            <UnloggedFrontPage useStyles={useStyles} setLoggedUser={props.setLoggedUser}/>
        )
    }
}




export default FrontPage

