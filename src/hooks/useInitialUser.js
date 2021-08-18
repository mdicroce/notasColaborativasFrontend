import React from 'react'
import { DataContext } from '../context/contextProvider'
import { useToken } from './useToken'

export const useInitialUser = () => {
    const { setUser } = React.useContext(DataContext)
    const {setNewToken} = useToken()
    React.useEffect(()=>{
        const user = JSON.parse(window.localStorage.getItem('loggedUser'))
        setUser(user)
        setNewToken(user.token)
    }, [])
}