import React from "react"
import { useStyles } from "./frontpage"
import { useUser } from "../services/users"
import { Container, Paper, Grid, Typography, Button, TextField } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { AddCircle } from "@material-ui/icons" 
import AccountCircleIcon from "@material-ui/icons/AccountCircle"


export const AddNewUserToRoom = ({room, postNewUserToRoom}) => {
    const classes = useStyles()
    const [searchForm, setSearchForm] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState([])
    const {getUser} = useUser()
    const onSubmit = (e) => {
        e.preventDefault()
        postNewUserToRoom(room._id, inputValue)
    }
    const onChangeField = async (e, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setSearchForm(e.target.value)
    }
    React.useEffect(() => {
        getUser(inputValue)
        .then(results => {
            let newOptions = []
            if(inputValue)
            {
                
            }
            if(results)
            {
                newOptions = [...newOptions, ...results.map(actualResult => actualResult.username)]
            }
            
            setOptions(newOptions)
        })

    }, [searchForm, inputValue, getUser])
    
        return (
            <div>
                <Container style={{ padding: "2rem 0 1rem 0" }}  maxWidth="sm">
                    <Paper style={{padding: "1rem"}}>
                        <form onSubmit={onSubmit}>
                            <Grid  container alignItems="center">
                                <Grid item xs>
                                    <Autocomplete 
                                    options={options} 
                                    value={inputValue} 
                                    includeInputInList
                                    onInputChange = { (e, newInputValue) => {setInputValue(newInputValue)} }
                                    getOptionLabel={(option) => option} 
                                    onChange={onChangeField}  
                                    fullWidth
                                    renderInput={(params) => <TextField size="small" {...params} label="Add a new user to this room" variant="standard"/> } 
                                    renderOption={(option) => {
                                        console.info(option)
                                        return (
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <AccountCircleIcon/>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography variant="body" color="textPrimary">
                                                        {option}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button fullWidth color="primary" type="submit" variant="text" className={classes.button} startIcon={<AddCircle />} size="medium">Add</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </div>
        )
}