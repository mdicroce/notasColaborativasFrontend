import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useStyles } from './frontpage'
import { useField } from '../hooks/useField'
import { Container } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

export const NewNote = () => {
    const classes = useStyles()
    const title = useField({type: 'text'})
    const content = useField({type: 'text'})
    const date = useField({type: 'date'})
    return (
        <Container fixed className={classes.containerDiv}>
            <form className={classes.form}>
                <TextField 
                fullWidth
                {...title}
                label='title'
                name='title'
                />
                <TextField 
                {...content}
                fullWidth
                label='Content'
                name='Content' 
                />
                <TextField
                label="Date"
                {...date}
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    size="large"
                    
                >
                    Add Note
                </Button>
            </form>
        </Container>
    )
}