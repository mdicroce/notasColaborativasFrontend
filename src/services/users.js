import axios from 'axios'
    const baseUrl = 'http://localhost:3001/api/users'


export const useUser = () => {
    const getUser = async (user) => {
        const response = await axios.get(`${baseUrl}/${user}`)
        return response.data
    }
    
    const registerNewUser = async (newObject) => {
        await axios.post(baseUrl, newObject)
        return "response.data"
    }
    return {getUser, registerNewUser}
}