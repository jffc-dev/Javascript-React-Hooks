import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id: 1234,
        name: 'Javier Flores',
        email: 'jffc.dev@gmail.com'
    }

    return (
        <div>
            <UserContext.Provider value={user}>
                <AppRouter></AppRouter>
            </UserContext.Provider>
        </div>
    )
}
