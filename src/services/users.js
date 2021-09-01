import axios from 'axios'
import { useMemo } from 'react'
    const baseUrl = 'http://localhost:3001/api/users'


export const useUser = () => {
    const getUser = useMemo(() => {return async (user = "") => {
        const response = await axios.get(`${baseUrl}/search/${user}`)
        return response.data
    }},[])
    
    const registerNewUser = async (newObject) => {
        await axios.post(baseUrl, newObject)
        return "response.data"
    }
    return {getUser, registerNewUser}
}