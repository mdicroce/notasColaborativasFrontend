import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UnloggedFrontPage from '../views/frontPageLoggout';
import LoggedFrontPage from '../views/userView';
import { DataContext } from '../context/contextProvider';

export const useStyles = makeStyles((theme) => ({
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
  newNoteForm:{
    padding: '1rem',
    paddingTop: '0',
    paddingBottom: '0.5rem'
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
  },
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
    backgroundColor: 'whitesmoke'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  div100: {
    width: '100%'
  },
  containerDiv : {
    padding: '1rem',
  },
  roomTable: {
    '&:hover':{
      backgroundColor: "#efefef"
    }
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
            <UnloggedFrontPage useStyles={useStyles} />
        )
    }
}




export default FrontPage

