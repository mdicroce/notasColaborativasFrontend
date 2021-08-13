import React from 'react'

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [user, setUser] = React.useState()
    const [view, setView] = React.useState()
    const [token, setToken] = React.useState()
    return (
        <DataContext.Provider value={{user, setUser, view, setView, token, setToken}}>
            {children}
        </DataContext.Provider>
    )
}