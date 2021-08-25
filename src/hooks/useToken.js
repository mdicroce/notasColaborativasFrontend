import React from "react"
import {DataContext} from '../context/contextProvider'

export const useToken = (T = "") => {
    const { setToken } = React.useContext(DataContext)
    const configureToken = (token) => {
        setToken(`bearer ${token}`)
    }
    return {
        configureToken
    }
}
