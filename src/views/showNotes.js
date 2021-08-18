import React from 'react'
import  useNote  from '../hooks/useNote'
import { DataContext } from '../context/contextProvider'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useStyles } from '../components/frontpage'

const notesAux = [
  {
    title: "primera nota",
    content: "Esta es una nota importante para hacer pruebas",
    complete: false,
    date: Date()
  },
  {
    title: "segunda nota",
    content: "Esta es una nota importante para hacer pruebas",
    complete: false,
    date: Date()
  },
  {
    title: "tercera nota",
    content: "Esta es una nota importante para hacer pruebas",
    complete: false,
    date: Date()
  },
  {
    title: "cuarta nota",
    content: "Esta es una nota importante para hacer pruebas",
    complete: false,
    date: Date()
  }
]


export const NotesTable = (props) => {
    
    /* const {notes, getNotesFromUser} = useNote()
    const { user } = React.useContext(DataContext)
    React.useEffect(()=> {
        getNotesFromUser(user.username)
        
        
    },[])  */

    const classes = useStyles()
    
    const notesToShow = notesAux.map(actualNote => {
      return (
        <Grid item key={actualNote.title} xs="12" md="6" lg="4">
          <Paper>

            <Typography variant="h3">
              {actualNote.title}
            </Typography>
            <Typography variant="body1">
              {actualNote.content}
            </Typography>
            <Typography variant="body2">
              {actualNote.date}
            </Typography>
          </Paper>
        </Grid>
      )
    })

    return (
      <Container fixed className={classes.containerDiv}>
        <Grid container justifyContent="flex-start" spacing="1" >
          {notesToShow}
        </Grid>
      </Container>
    )
}