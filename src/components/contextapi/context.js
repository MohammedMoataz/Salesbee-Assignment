import React, { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = (props) => {
    const appInitialState = {}

    return (
        <AppContext.Provider value={appInitialState}>
            {props.children}
        </AppContext.Provider>
    )
}