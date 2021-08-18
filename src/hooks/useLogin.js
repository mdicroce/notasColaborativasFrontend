import { useContext } from "react"
import { useField } from '../hooks/useField'
import { login } from "../services/login"
import { useToken } from './useToken'
import { DataContext } from "../context/contextProvider"

export const useLogin = () => {
    const username = useField({type: 'text'})
    const password = useField({type: 'password'})
    const rememberMe = useField({type: 'checkbox'})
    const { setNewToken } = useToken('')
    const { setUser } = useContext(DataContext)
    
    const onSubmitLogin = async (e) => {
        e.preventDefault()
        const response = await login({username : username.value, password : password.value})
        setNewToken(response.token) 
        setUser(response)
        if(rememberMe.value)
        {
            window.localStorage.setItem('loggedUser', JSON.stringify(response))
        }
    }

    return { username, password, rememberMe, onSubmitLogin }
}