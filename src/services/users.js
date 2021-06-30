import axios from 'axios'
    const baseUrl = 'http://localhost:3001/api/users'


const getUser = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const getNotesFromUser = async (newObject) => {
    const response = await axios.get(`${baseUrl}/notes`, newObject)
    return response.data
}

const postNewUser = async (newObject) => {
    const response = await axios.post(`${baseUrl}`, newObject)
    return response.data
}


const objectToExport = { getUser, getNotesFromUser, postNewUser }

export default objectToExport