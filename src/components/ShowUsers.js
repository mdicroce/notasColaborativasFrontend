import React from "react"
import { Container, Paper, Typography, Grid, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import { ShowForm } from "./newNote"

export const ShowUsers = ({users}) => {
    const [usersToShow, setUsersToShow] = React.useState([])
    
    React.useEffect(()=>{
        
        setUsersToShow(users.map(
            (actualUser)=>{
                return (<ShowOneUser key={actualUser.id} user={actualUser}/>)
            }))
    },[users])
    return(
        <Container style={{padding: "1rem 0"}}>
            <ShowForm text="Show Users">
                <Paper style={{ padding: "1rem" }}  variant="outlined">

                    <Typography variant="h2">
                        Users
                    </Typography>
                    <Grid container spacing={3}>
                        {usersToShow}
                    </Grid>
                </Paper>
            </ShowForm>
        </Container>
    )
}

const ShowOneUser = ({user}) => {
    return(
        <Grid item sm={12}  md={4} lg={3}>
            <Paper>
                <List>
                    <ListItem>
                        <ListItemText primary={user.username} secondary="username"/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary={user.email} secondary="email"/>
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    )
}