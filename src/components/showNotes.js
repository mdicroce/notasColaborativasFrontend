import React from 'react'
import  { useNote }  from '../hooks/useNote'
import { DataContext } from '../context/contextProvider'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useStyles } from './frontpage'
import { NewNote } from './newNote'

export const NotesTable = (props) => {
    
    const {notes, getNotesFromRoom, postNewNote} = useNote()
    const { user } = React.useContext(DataContext)
    const [notesToShow, setNotesToShow] = React.useState([])
    React.useEffect(()=> {
      getNotesFromRoom(user.personalRoom)
      console.log("vamos")
    },[])
    React.useEffect(()=> {
        setNotesToShow(notes.map(actualNote => {
      return (
        <Grid item key={actualNote.title} xs={12} md={6} lg={4} >
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
    }))
    },[notes]) 

    const classes = useStyles()
    
  
    return (
      <Container fixed className={classes.containerDiv} >
        <Grid container justifyContent="flex-start" spacing={1} alignItems="center">
          <Grid item key={"newNoteToAdd"} xs={12} md={12}>
            <NewNote postNewNote={postNewNote}/>
          </Grid>
          {notesToShow}
        </Grid>
      </Container>
    )
}