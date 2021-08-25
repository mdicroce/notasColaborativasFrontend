import { Button, Collapse, Paper, TextField } from '@material-ui/core'
import React from 'react'
import { useStyles } from './frontpage'
import { useField } from '../hooks/useField'
import  useNote  from '../hooks/useNote'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { DataContext } from '../context/contextProvider'


const ShowNewNote = (props) => {
    
    const [show, setShow] = React.useState(false)
    const [startIcon, setStartIcon] = React.useState(<AddIcon />)
    const onClick = (e) => {
        setShow(!show)
        if(!show)
        {
            setStartIcon(<CloseIcon/>)
        }
        else{
            setStartIcon(<AddIcon/>)
        }
        
    }
    return (
        <Paper>
            <Button startIcon={startIcon}  onClick={onClick} fullWidth color={'primary'} variant="contained"/>
                <Collapse in={show}>
                    {props.children}
                </Collapse>
        </Paper>
    )
}

export const NewNote = () => {
    const {user} = React.useContext(DataContext)
    const classes = useStyles()
    const title = useField({type: 'text'})
    const content = useField({type: 'text'})
    const date = useField({type: 'date'})
    const { postNewNote } = useNote()
    const onSub = (e) => {
        e.preventDefault()
        const newNote = {title: title.value ,content: content.value,date: date.value, room: user.personalRoom}
        postNewNote(newNote)
    }  
    

    return (
        <ShowNewNote >
            
            <form className={classes.newNoteForm} onSubmit={onSub} noValidate>
                <TextField 
                fullWidth
                {...title}
                label='title'
                name='title'
                />
                <TextField 
                {...content}
                multiline
                fullWidth
                label='Content'
                name='Content' 
                />
                <TextField
                label="Date"
                {...date}
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                />
                
                    <Button 
                        style={{marginTop: '0.5rem'}}
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        size="large"
                        
                    >
                        Add Note
                    </Button>
                
            </form>
            
        </ShowNewNote>
        
    )
}
