import React from 'react'
import { useRoom } from '../hooks/useRoom'
import { Container, Grid, Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core'


export const FocusRoomView = ({id}) => {
    const { room, getRoom } = useRoom()
    React.useEffect(()=>{
        getRoom(id)
    },[])
    return(
        <Container>
            
        </Container>
    )
}

const AddNewUserToRoom = () => {
    
}

const ShowUsers = ({users}) => {
    const [usersToShow, setUsersToShow] = React.useState([])
    React.useEffect(()=>{
        setUsersToShow(users.map(
            (actualUser)=>{
                return (<ShowOneUser key={actualUser.id} user={actualUser}/>)
            }))
    },[users])
    return(
        <Container>
            <Grid container>
                {usersToShow}
            </Grid>
        </Container>
    )
}

const ShowOneUser = ({user}) => {
    return(
        <Grid item sm="12" xl="3">
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