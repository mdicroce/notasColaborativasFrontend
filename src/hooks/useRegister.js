import { useContext } from "react"
import { useField } from '../hooks/useField'
import { useUser } from "../services/users"
import { DataContext } from "../context/contextProvider"
import { SignIn } from "../views/loginView"

export const useRegister = () => {
    const {registerNewUser} = useUser()
    const username = useField({type: 'text'})
    const password = useField({type: 'password'})
    const email = useField({type: 'email'})
    const { setView } = useContext(DataContext)
    
    const onSubmitRegister = async (e) => {
        e.preventDefault()
        const response = await registerNewUser({username : username.value, email: email.value ,password : password.value})
        if(response)
        setView(<SignIn/>)
    }

    return { username, password, email, onSubmitRegister }
}