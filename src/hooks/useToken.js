import React from "react"
import {DataContext} from '../context/contextProvider'

export const useToken = (T = "") => {
    const [newToken, setNewToken] = React.useState(`bearer ${T}`)
    const { setToken } = React.useContext(DataContext)
    React.useEffect(()=> {
        setToken(`bearer ${newToken}`)
    },[newToken])
    return {
        setNewToken
    }
}
