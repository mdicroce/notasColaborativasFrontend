import { useStyles } from "./frontpage"
import { useField } from "../hooks/useField"
import { Container, Paper, Grid, TextField, Button } from "@material-ui/core"
import { AddCircle } from "@material-ui/icons"
import { ShowForm } from "./newNote"


export const NewRoom = ({ postNewRoom }) =>
{
    const classes = useStyles()
    const { roomName } = useField({type: 'text'})
    const { password } = useField({type: 'password'})
    const onSubmitRoom = (e) => {
        e.preventDefault()
        postNewRoom({roomName: roomName.value, password: password.value})
        roomName.resetValue()
        password.resetValue()
    }
    return (
        <Container style={{ margin: "1rem auto",   textAlign:"center"}}>
                <Paper style={{width: "85%", margin: "0 auto"}}>
            <ShowForm>
                    <form onSubmit={onSubmitRoom}>
                        <Grid style={{padding: "0 1rem 1rem"}} container alignItems="center" alignContent="flex-start" spacing={2} justifyContent="center">
                            <Grid item md={6} sm={12}>
                                <TextField
                                    margin='normal'
                                    {...roomName}
                                    required
                                    fullWidth
                                    label='Rooms Name'
                                    name='roomName'
                                />
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    
                                    margin='normal'
                                    {...password}
                                    fullWidth
                                    label='Room Pass'
                                    name='password'
                                />
                            </Grid>
                            <Grid item md={12} sm={12}>
                                <Button 
                                    style={{marginTop: '0.5rem'}}
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<AddCircle />}
                                    size="large"
                                    
                                >
                                    Create New Room
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
            </ShowForm>
                </Paper>
        </Container>
    )
}